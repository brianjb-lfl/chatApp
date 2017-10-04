import React from 'react';
import Message from './message';
import './messageList.css';

export default function MessageList(props) {

  const mappedArr = props.msgArr.map( (msg, idx) => (
    <li>{msg}</li>
  ));


  return (
    <div>{mappedArr}</div>
  );

}