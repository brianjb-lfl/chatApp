import React from 'react';
import Message from './message';
import './messageList.css';

export default function MessageList(props) {

  const mappedArr = props.msgArr.map( (msg, idx) => (
    <Message key={idx} message={msg} />
  ));


  return (
    <div>{mappedArr}</div>
  );

}