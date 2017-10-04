import React from 'react';
import './message.css';
const Moment = require('moment'); 

export default function MessageList(props) {

  // var time = moment(1382086394000).format("DD-MM-YYYY h:mm:ss");
  return (
    <div>
      <p>message: {props.message.message}</p>
      <p>user: {props.message.user}</p>
      <p>created: {Moment(props.message.created).format('MMMM Do YYYY h:mm:ss a')}</p>
    </div>
  );

}