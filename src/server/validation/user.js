const Validator = require('validator');
const { isEmpty } = require('./ud_validation');
import {ADMIN,END_USER} from '../common/constants';

let userTypes=[ADMIN,END_USER]

module.exports = function validateUserInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.type = !isEmpty(data.type) ? data.type:'';
    data.isActive = !isEmpty(data.isActive) ? data.isActive : '';
    
    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'name must be between 2 and 30 characters';
    }
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "name field can'' be empty";
    }

    if (!Validator.isEmpty(data.type)){
        errors.type-"User type can't be empty"
    }

    if (userTypes.indexOf(data.type)<0){
        errors.type="User type doesn't exist"
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