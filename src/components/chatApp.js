'use strict';

import React from 'react';
import MessageList from './messageList';
import InputForm from './inputForm';

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []            // {key: , user: , msgStr: }
    }
  }

  handleAdd(text) {
    this.setState({
      messages: [...this.state.messages, text]
    })
  }
  render() {
    return (
      <div><MessageList msgArr={this.state.messages}/>
      <InputForm onAdd={text => this.handleAdd(text)} /></div>
    );
  }

}