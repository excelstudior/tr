import React, { Component } from 'react';
import PropTypes from 'prop-types';
const List=({items,onClick})=>{
    console.log(items,onClick)
    return(
    <ul>
        {items.map((item)=>{return <li onClick={onClick}>{item}</li>})}
    </ul>
)}

List.PropTypes={
    items:PropTypes.array.isRequired,
    onClick:PropTypes.func,
}

export default List