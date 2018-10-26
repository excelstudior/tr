const Validator = require('validator');
const {isEmpty,isNumberStr} = require('./ud_validation');


module.exports = function validatePostInput(data) {
    let errors = {};

    data.postcode = !isEmpty(data.postcode) ? data.postcode : '';


    if (typeof(data.address1)!== 'string') {
        errors.address1='business type should be string value'
    };
    if (typeof(data.address2)!== 'string') {
        errors.address2='business type should be string value'
    };
    if (typeof(data.suburb)!== 'string') {
        errors.suburb='business type should be string value'
    };
    if (typeof(data.state)!== 'string') {
        errors.state='business type should be string value'
    };
    if (typeof(data.country)!== 'string') {
        errors.country='business type should be string value'
    };

    if (typeof(data.isDefault)!== 'boolean') {
        errors.isDefault='isDefault field needs to be a boolean'
    };

    if (typeof(data.addressType)!== 'string') {
        errors.addressType='business type should be string value'
    };
    if(!isNumberStr(data.postcode)){
        errors.postcode='Postcode must be numbers !'
    };

  
    return {
        errors,
        isValid: isEmpty(errors)
    }
}