const express = require('express');
const router = express.Router();
const queryString = require('query-string');
const url = require('url');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//Load Model
const Customer = require('../../model/Customer')
//Load validations
const validateCustomerInput = require('../../validation/customer');
const validateAddressInput = require('../../validation/address');
import {ADMIN,END_USER} from '../../common/constants';


const errors = {}

router.use(passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    req.user.type===ADMIN
    ?next()
    :res.status(401).json(errors);
})

router.get('/', (req, res) => {
    Customer.find()
            .then(customers=>{
                if (!customers){
                    errors.noCustomers='No customers'
                    return res.status(404).json(errors)
                }
                res.json(customers)
            })
    //res.status(200).send('customer')
})
//create new customer, no address and phone data
router.post('/', (req, res) => {
    const { errors, isValid } = validateCustomerInput(req.body);
    if (!isValid) {
        return res.status(404).json(errors);
    }
    console.log('valiadation ok');

    Customer.findOne({ email: req.body.email }).then((customer) => {
        if (customer) {
            errors.email = "Email already exists";
            return res.status(400).json(errors)
        } else {
            const newCustomer = new Customer({
                name: req.body.name,
                email: req.body.email,
                isActive: typeof (req.body.isActive) === 'boolean'
                    ? req.body.isActive
                    : true,
                businessType: typeof (req.body.businessType) === 'string'
                    ? req.body.businessType
                    : '',
                tradingName: typeof (req.body.tradingName) === 'string'
                    ? req.body.tradingName
                    : '',
                abn: typeof (req.body.abn) === 'string'
                    ? req.body.abn
                    : '',
            })

            newCustomer.save()
                .then(customer => res.json(customer))
                .catch(err => console.log(customer))
        }
    }).catch(err => res.status(400).json(err))

    // res.status(200).send('ok')
})

//update customer without address and phone data
router.post('/:customerId', (req, res) => {
    const { errors, isValid } = validateCustomerInput(req.body);
    if (!isValid) {
        return res.status(404).json(errors);
    }
    console.log('valiadation ok');
    Customer.findById(req.params.customerId).then(customer => {
        if (!customer) {
            errors.customerNotFound = "Customer Not Found";
            return res.status(404).json(errors);
        } else {
            customer.name = req.body.name;
            customer.email = req.body.email;
            customer.isActive = typeof (req.body.isActive) === 'boolean'
                ? req.body.isActive
                : customer.isActive;
            customer.businessType = typeof (req.body.businessType) === 'string'
                ? req.body.businessType
                : customer.businessType;
            customer.tradingName = typeof (req.body.tradingName) === 'string'
                ? req.body.tradingName
                : customer.tradingName;
            customer.abn = typeof (req.body.abn) === 'string'
                ? req.body.abn
                : customer.abn;
            console.log(customer);
            customer.save().then(customer => res.json(customer))
        }

    }).catch(err => res.status(400).json(err))
})

//update customer address
router.post('/address/:customerId', (req, res) => {

    const { errors, isValid } = validateAddressInput(req.body);
    if (!isValid) {
        return res.status(404).json(errors);
    }
    console.log('address validation ok');
    Customer.findById(req.params.customerId)
        .then(customer => {
            if (!customer) {
                errors.customerNotFound = 'Customer not found';
                return res.status(404).json(errors);
            }
            const newAddress = {
                addressType: req.body.addressType !== undefined
                    ? req.body.addressType : '',
                address1: req.body.address1 !== undefined
                    ? req.body.address1 : '',
                address2: req.body.address2 !== undefined
                    ? req.body.address2 : '',
                suburb: req.body.suburb !== undefined
                    ? req.body.suburb : '',
                state: req.body.state !== undefined
                    ? req.body.state : '',
                postcode: req.body.postcode !== undefined
                    ? req.body.postcode : '',
                country: req.body.country !== undefined
                    ? req.body.country : '',
                isDefault: req.body.isDefault === Boolean
                    ? req.body.isDefault : false,
            }
            customer.address = [...customer.address, newAddress]
            console.log(customer.address);
            res.json(customer)

            customer.save().then(customer => res.json(customer))
        })

})
//get address of customer
router.get('/address/:customerId', (req, res) => {

    Customer.findById(req.params.customerId)
        .then(customer => {
            if (!customer) {
                errors.customerNotFound = 'Customer not found';
                return res.status(404).json(errors);
            }
            res.json(customer.address)
        })

})
//delete address of customer
router.delete('/:customerId/address/:addressId', (req, res) => {

    Customer.findById(req.params.customerId)
        .then(customer => {
            if (!customer) {
                errors.customerNotFound = 'Customer not found';
                return res.status(404).json(errors);
            }
            const newCustomerAddress = customer.address.filter((ad) => {
                if (ad._id.toString() !== req.params.addressId) {
                    return ad
                }
            })

            res.json(newCustomerAddress)
        })

})

//update address of customer
router.post('/:customerId/address/:addressId', (req, res) => {

    Customer.findById(req.params.customerId)
        .then(customer => {
            if (!customer) {
                errors.customerNotFound = 'Customer not found';
                return res.status(404).json(errors);
            }
            const newCustomerAddress = customer.address.map((ads) => {
                if (ads._id.toString() === req.params.addressId) {

                    const { errors, isValid } = validateAddressInput(req.body);
                    if (!isValid) {
                        return res.status(404).json(errors);
                    }
                    console.log('address validation ok');

                    console.log(ads);
                    console.log(...ads)

                    return {...ads,
                        addressType: req.body.addressType !== undefined
                            ? req.body.addressType : '',
                        address1: req.body.address1 !== undefined
                            ? req.body.address1 : '',
                        address2: req.body.address2 !== undefined
                            ? req.body.address2 : '',
                        suburb: req.body.suburb !== undefined
                            ? req.body.suburb : '',
                        state: req.body.state !== undefined
                            ? req.body.state : '',
                        postcode: req.body.postcode !== undefined
                            ? req.body.postcode : '',
                        country: req.body.country !== undefined
                            ? req.body.country : '',
                        isDefault: req.body.isDefault === Boolean
                            ? req.body.isDefault : false,
                    }

                } else {
                    return ads
                }
            })
            console.log(newCustomerAddress)

            let newCustomer={...customer,address:newCustomerAddress}
            res.json(newCustomer)
        })

})


module.exports = router;