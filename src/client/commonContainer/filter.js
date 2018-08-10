import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Filter = ({ dispatch, filterType, values, actions }) => {
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

Filter.propTypes = {
    values: PropTypes.instanceOf(Object).isRequired,
    actions: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
}

export default connect()(Filter);