'use strict';

import React from 'react';
import MessageList from './messageList';
import InputForm from './inputForm';

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []            // {user: , msgStr: }
    }
  }

  handleAdd(text, user) {
    console.log(user, "THIS IS THE USER")
    this.setState({
      messages: [...this.state.messages, {message: text, user: user}]
    })
  }
  render() {
    return (
      <div><MessageList msgArr={this.state.messages}/>
      <InputForm onAdd={(text, user) => this.handleAdd(text, user)} /></div>
    );
  }

}