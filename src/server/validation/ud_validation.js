const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
const isDate = value =>
    !isNaN(Date.parse(value));
const isNumberStr = value => {
    let reg = /[^0-9]/g;
    let result = value.match(reg)
    if(result === null){
        return true
    }else{return false};
}

module.exports = {
    isEmpty,
    isDate,
    isNumberStr
};
