import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Picker extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
      
    }

    componentDidUpdate(){
   
    }
   
    render() {
        const {onChange,value,options}=this.props
        return (
           <span>
               <h1>{value}</h1>
               <select 
                onChange={e=>onChange(e.target.value)}  value={value}
               >
                {options.map((option,i)=>
                    (<option value={option} key={i}>
                        {option}
                    </option>)
                )}
               </select>
           </span>
        )
    }
}

Picker.PropTypes={
    options:PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Picker
