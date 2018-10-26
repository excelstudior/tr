const Validator = require('validator');
const { isEmpty } = require('./ud_validation');

module.exports = function validateCustomerInput(data) {
    let errors = {};
    console.log(data)
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email:'';
    data.isActive = !isEmpty(data.isActive) ? data.isActive : '';
    if (typeof(data.businessType)!== 'string') {
        errors.businessType='business type should be string value'
    };

    if (typeof(data.tradingName)!== 'string') {
        errors.tradingName='trading name should be string value'
    };

    if (typeof(data.abn)!== 'string') {
        errors.abn='abn should be string value'
    };
    
    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'name must be between 2 and 30 characters';
    }
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "name field can't be empty";
    }

    if (Validator.isEmpty(data.email)){
        errors.email="Customer email can't be empty";
    }
    if (!Validator.isEmpty((data.isActive).toString())) {
        if (!Validator.isBoolean((data.isActive).toString())) {
            errors.isActive = 'from field needs to be a boolean'
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}