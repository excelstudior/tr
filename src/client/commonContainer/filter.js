import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../todo/action/mode'

const Filter = ({ dispatch, filterType,values,actions }) => {
    let type;
    return (
        <select ref={node => type = node}
        onChange={e => {
            e.preventDefault();
            dispatch(actions(filterType, type.value))
        }}>
            {Object.keys(values).map(t => <option key={t} value={values[t]}>{values[t]}</option>)}
        </select>
    )
}


export default connect()(Filter);