import React, { Component } from 'react';
import './Chat.css';
import ChatMessage from './ChatMessage'



class ChatContent extends Component {
    constructor(props){
        super(props);
      this.chatContentRef=React.createRef();
     this.scrollToBottom=this.scrollToBottom.bind(this)
    }

    componentDidMount(){
        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }
    scrollToBottom(){
        this.chatContentRef.current.scrollTop = this.chatContentRef.current.scrollHeight;
      };

    render() {
 
        return (<div className='ChatContent' ref={this.chatContentRef} >
            {this.props.messages.map(msg => <ChatMessage msg={msg} key={msg.number} />)}
        </div>)
    }
}

export default ChatContent;