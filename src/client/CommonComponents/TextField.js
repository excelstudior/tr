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
    error,
    classname

})=>{
    return (
        <div className={classname}>
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
            {error&&<small>x {error}</small>}
        </div>
    )
}

TextField.PropTypes={
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    defaultValue:PropTypes.string.isRequired,
    value:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    disabled:PropTypes.boolean,
    info:PropTypes.string,
    error:PropTypes.string,
    classname:PropTypes.string,
}
TextField.defaultProps={
    type:'text'
}

export default TextField