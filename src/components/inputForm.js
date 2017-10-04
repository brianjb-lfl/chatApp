import React from 'react';
import './inputForm.css';

export default class InputForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const text = this.inputText.value.trim();
    if (text && this.props.onAdd) {
        this.props.onAdd(text);
    }
    this.inputText.value = '';
  }

  render() {

    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}> 
          <input type="text" ref={input => this.inputText = input} />
        </form>
      </div>
    );

  }

}