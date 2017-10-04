import React from 'react';
import './message.css';

export default function MessageList(props) {

  return (
    <div>
      <p>message: {props.message.message}</p>
      <p>user: {props.message.user}</p>
    </div>
  );

}