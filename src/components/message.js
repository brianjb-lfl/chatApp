import React from 'react';
import './message.css';
const Moment = require('moment'); 

export default function MessageList(props) {

  // var time = moment(1382086394000).format("DD-MM-YYYY h:mm:ss");
  const currentUser = `${props.message.user} messageContainer`; 

  return (
      <div className={currentUser}>
        <p>{props.message.message}</p>
        <p className="messageData">{props.message.user} <i>{Moment(props.message.created).format('MMMM Do YYYY h:mm:ss a')}</i></p>
      </div>
  );

}