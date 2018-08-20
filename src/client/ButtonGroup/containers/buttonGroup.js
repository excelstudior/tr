import React from 'react';
import { connect } from 'react-redux';
import {store} from '../../store/index'
import { setTechName } from '../actions/index'


let tech=store.getState().tech

const ButtonGroup=({dispatch})=>(
    <div>
        {tech.map((t,i)=>(
            <button
                data-tech={t}
                key={i}
                onClick={()=>dispatch(setTechName(t))}
             
            >{t}</button>
        ))}
    </div>
)

export default connect()(ButtonGroup)
