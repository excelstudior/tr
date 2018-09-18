import React from 'react';
import PropTypes from 'prop-types';

const TextField=({
    type,
    name,
    placeholder,
    defaultValue,
    value,
    onChange,
    disabled,
    info,
    error

})=>{
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {info&&<small>{info}</small>}
            {error&&<small>{error}</small>}
        </div>
    )
}

TextField.PropTypes={
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    defaultValue:PropTypes.string.isRequired,
    value:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    disabled:PropTypes.sting,
    info:PropTypes.string,
    error:PropTypes.string
}
TextField.defaultProps={
    type:'text'
}

export default TextField