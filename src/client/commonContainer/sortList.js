import React from 'react';
import { connect } from 'react-redux';
import { updateSort } from '../todo/action/mode'

const SortList = ({ dispatch, values }) => {
    let selectedOption;
    return (
        <select ref={node => selectedOption = node}
            onChange={e => {
                e.preventDefault();
                dispatch(updateSort(null, parseInt(selectedOption.value)))
            }} >
            {Object.keys(values).map(key => <option key={values[key]} value={values[key]}>{key}</option>)}
        </select>
    )
}


export default connect()(SortList);