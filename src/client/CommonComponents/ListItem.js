import React, { Component } from 'react';
import PropTypes from 'prop-types';
const ListItem=({item,onClick})=>{
    return(
  
        <li><button onClick={onClick} value={item} name={item}>{item}</button></li>
 
)}

ListItem.PropTypes={
    item:PropTypes.string.isRequired,
    onClick:PropTypes.func,
}

export default ListItem