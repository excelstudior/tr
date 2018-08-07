import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../todo/action/mode'

const Filter = ({ dispatch, types }) => {
    let type;
    return (
        <select ref={node => type = node}
        onChange={e => {
            e.preventDefault();
            dispatch(updateFilter(type.value, null))
        }}>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
    )
}


export default connect()(Filter);