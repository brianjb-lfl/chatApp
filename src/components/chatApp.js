'use strict';

import React from 'react';
import MessageList from './messageList';
import InputForm from './inputForm';
import './chatApp.css'; 

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []            // {user: , msgStr: }
    }
  }

  handleAdd(text, user, created) {
    console.log(user, "THIS IS THE USER")
    this.setState({
      messages: [...this.state.messages, {message: text, user: user, created: created}]
    })
  }
  render() {
    return (
      <div className="master-container">
        <InputForm onAdd={(text, user, created) => this.handleAdd(text, user, created)} />
        <MessageList msgArr={this.state.messages}/>
      </div>
    );
  }

}