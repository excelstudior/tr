import React, {Component} from 'react';
import './app.css'
import Reddit from './Reddit/containers/Reddits'

export default class App extends Component {
    
    render() {
    
        return <div className='App'>
         <Reddit/>
        </div>
    }
}