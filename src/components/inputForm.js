import React from 'react';
import './inputForm.css';

export default class InputForm extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      user: '1'
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const text = this.inputText.value.trim();
    const user = this.state.user
    const created = Date.now(); 
    if (text && this.props.onAdd) {
      console.log(user, "CHILD USER"); 
        this.props.onAdd(text, user, created);
    }
    this.inputText.value = '';
  }

  setUser(user){
    this.setState({
      user
    });
  }

  render() {

    return (
      <div>
        <select  
          value={this.state.user} 
          onChange={e => this.setUser(e.target.value)} >
          <option value="1">User 1</option>
          <option value="2">User 2</option>
        </select>
        <form onSubmit={(e) => this.onSubmit(e)}> 
          <input type="text" ref={input => this.inputText = input} />
        </form>
      </div>
    );

  }

}