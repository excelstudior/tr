import React, { Component } from 'react';
import './JapaneseCharacter.css';

import PropTypes from 'prop-types';
import { Characters } from './Characters';

let Chars = new Characters;

const Card = (props) => {

    return (<li>{props.hinagara}</li>)
}

class JapaneseCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chaSet_grpByConsonant: this.createChars('consonant'),
            chaSet_grpByVowel: this.createChars('vowel'),
        };
        this.createChars = this.createChars.bind(this);
        this.changeCharsOrder = this.changeCharsOrder.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    createChars(groupBy) {
        return Chars.groupBy(groupBy).mapGrouppedObjToArray().createLinesToDisplay()
    }

    changeCharsOrder(e) {
        this.setState({
            [e.target.name]: this.createChars(e.target.value)
        })
    }

    render() {

        const { chaSet_grpByConsonant, chaSet_grpByVowel } = this.state;
        console.log('this state', chaSet_grpByConsonant, chaSet_grpByVowel)
        return (
            <div>
                <div>
                    <button name='chaSet_grpByConsonant' value='consonant' onClick={this.changeCharsOrder}>Generate random order</button>
                    <ul className='jp-cha-lines'>
                        {chaSet_grpByConsonant.map((chaGroup, i) => {
                            return <li index={i} key={Object.keys(chaGroup)[0]} >
                                <ul className='jp-cha-line'>
                                    {chaGroup[Object.keys(chaGroup)[0]].map((char) => {
                                        return <Card vowel={char.vowel}
                                            consonant={char.consonant}
                                            hinagara={char.hinagara}
                                            katakana={char.katakana}
                                            shown={char.shown}
                                            answer={char.answer} />
                                    })}</ul>

                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <button name='chaSet_grpByVowel' value='vowel' onClick={this.changeCharsOrder}>Generate random order</button>
                    <ul className='jp-cha-lines'>
                        {chaSet_grpByVowel.map((chaGroup, i) => {
                            return <li index={i} key={Object.keys(chaGroup)[0]} >
                                <ul className='jp-cha-line'>
                                    {chaGroup[Object.keys(chaGroup)[0]].map((char) => {
                                        return <Card vowel={char.vowel}
                                            consonant={char.consonant}
                                            hinagara={char.hinagara}
                                            katakana={char.katakana}
                                            shown={char.shown}
                                            answer={char.answer} />
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