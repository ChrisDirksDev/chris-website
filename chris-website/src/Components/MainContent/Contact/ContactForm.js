import React, {Component} from 'react';
import './ContactForm.css';
import emailIcon from './email.png'
import userIcon from './user.png'
import messageIcon from './edit.png'
import TypeText from '../TypeWriterText/TypewriterText'

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      nameDefault: 'Enter your name',
      name:'',
      emailDefault: 'Enter your email',
      email:'',
      messageDefault:'Leave a message',
      message:''
    }
  }

  nameChange = (event) =>{
    this.setState({ name: event.target.value });
  }
  emailChange = (event) =>{
    this.setState({ email: event.target.value });
  }
  messageChange = (event) =>{
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <form className="ContactForm Flex col-center">
        <div className='flex row dynamic-row ms'>
          <TypeText typedText={['Questions?', 'Just Saying hi?', 'Work Together?', 'New Project Idea?']}/>
        </div>
        <div className='flex row row-center form-header'>
          <p className='sl h1'>Contact Me</p>
        </div>
        <div className="Flex row col-center input">
          <img src={userIcon}/>
          <input
            className='ms text-input' 
            type="text"
            value={this.state.name}
            onChange={this.nameChange}
            placeholder={this.state.nameDefault}
          />
        </div>
        <div className="flex row col-center input">
          <img src={emailIcon}/>
          <input
            className='ms text-input' 
            type="text"
            value={this.state.email}
            onChange={this.emailChange}s
            placeholder={this.state.emailDefault}
          />
        </div>
        <div className="Flex row flex-start input">
          <img src={messageIcon}/>
          <textarea
            className='ms  text-input'
            value={this.state.message}
            onChange={this.messageChange}
            placeholder={this.state.messageDefault}/>
        </div>
        <input className="sl button" type="submit" value="Send Message" />
      </form>
    );
  }

}

export default ContactForm;