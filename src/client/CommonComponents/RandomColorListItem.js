import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RandomColorListItem = ({ item
    , onClick
}) => {
    const getRandomColor = () => {
        var letters = '0123456789ABCD';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 14)];
        }
        return color;
    }

    let color=getRandomColor();
    return (
        <li onClick={onClick}
            style={{ background:color }}
        >{item}</li>
    )
}

RandomColorListItem.PropTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default RandomColorListItem