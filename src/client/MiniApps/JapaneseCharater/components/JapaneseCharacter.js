import React, { Component } from 'react';
import './JapaneseCharacter.css';

import PropTypes from 'prop-types';
import { Characters } from './Characters';



const Card = ({shown,hinagara,katakana,charType,onChange,userInput}) => {
    console.log(hinagara, 'shown', shown)
    return (
        shown
        ? 
        <li><input type='text' 
                    disabled={shown} 
                    value={charType==='katakana' ? katakana : hinagara} 
                    /></li>
        : <li>
            <input type='text'
                   style={{ background: 'pink' }} 
                   name={charType==='katakana'? katakana:hinagara}
                   value={userInput}
                   onChange={onChange}/>
        </li>
        )
}

class JapaneseCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chaSet_grpByConsonant: this.createChars('consonant'),
            // chaSet_grpByVowel: this.createChars('vowel'),
            characters:[],
            // grpByConsonant_charType: false,
            // grpByVowel_charType:false,
            charType:'hinagara',
            groupType:'consonant',
        };
        this.createChars = this.createChars.bind(this);
        this.changeCharsOrder = this.changeCharsOrder.bind(this);
        this.changeCharType = this.changeCharType.bind(this);
        this.changeGroupType = this.changeGroupType.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.setState({
            characters:this.createChars('consonant')
        })
    }

    createChars(groupBy) {
        let Chars = new Characters;
        return Chars.groupBy(groupBy).mapGrouppedObjToArray().createLinesToDisplay()
    }

    changeCharsOrder() {
        this.setState({
            characters: this.createChars(this.state.groupType)
        })
    }

    changeGroupType(){
        this.setState(prevState=>({
           groupType:prevState.groupType==='consonant'
                        ?'vowel'
                        :'consonant'
        }))
    }
    changeCharType(e) {
        this.setState(prevState=>({
            charType:prevState.charType==='hinagara'
                         ?'katakana'
                         :'hinagara'
         }))
    }
    onChange(e){
        console.log(e.target.name,e.target.value)
        if (e.target.name===e.target.value){
        console.log(e.target.value)}
        else {
            console.log('not equal')
        }
       
    }
    render() {

        const { 
            
            charType,
            groupType,
            characters,

        } = this.state;
        console.log('this state', characters)
        return (
            <div>
                <div>
                    <button name='chaSet_grpByConsonant' value='consonant' onClick={this.changeCharsOrder}>Generate random order</button>
                    <button name='btn-charType' onClick={this.changeCharType}>Change Character Type</button>
                    <button name='btn-grpType'  onClick={this.changeGroupType}>Change Group Type</button>

                    <ul className='jp-cha-lines'>
                        {characters.map((chaGroup, i) => {
                            return <li index={i} key={Object.keys(chaGroup)[0]} >
                                <ul className='jp-cha-line'>
                                    {chaGroup[Object.keys(chaGroup)[0]].map((char) => {
                                        return <Card vowel={char.vowel}
                                            consonant={char.consonant}
                                            hinagara={char.hinagara}
                                            katakana={char.katakana}
                                            shown={char.shown}
                                            answer={char.answer}
                                            charType={charType}
                                            onChange={this.onChange}
                                            userInput={char.userInput}
                                        />
                                    })}</ul>

                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default JapaneseCharacter