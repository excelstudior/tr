import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup/containers/buttonGroup'
import Bank from './Bank/containers/bank'
export default class App extends Component {
    render() {
        return <div>
            <ButtonGroup/>
            <Bank/>
          
        </div>
    }
}