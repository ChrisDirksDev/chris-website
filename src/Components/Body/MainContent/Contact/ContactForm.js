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
      nameDefault: 'Your name',
      name:'',
      emailDefault: 'Your email',
      email:'',
      messageDefault:'Your message',
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
      <form className="ContactForm flex flex-column col-center h-100 mt5">
        <div className='flex row dynamic-row ms'>
          <TypeText typedText={['Questions?', 'Just Saying Hi?', 'Work Together?', 'New Project Idea?']}/>
        </div>
        <div className='flex row row-center form-header'>
          <span className='sl sl-big'>Contact Me</span>
        </div>
        {/* <div className="flex row col-center input">
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
        <div className="flex row flex-start input">
          <img src={messageIcon}/>
          <textarea
            className='ms text-input'
            value={this.state.message}
            onChange={this.messageChange}
            placeholder={this.state.messageDefault}/>
        </div>
        <button type="submit" value="Submit" className="w5 h4 mt4 shadow-5"><span className="f-subheadline ">Submit</span></button> */}
        <a onClick="javascript:window.open('mailto:chrisdirks.developer@gmail.com', 'mail');event.preventDefault()" href="mailto:chrisdirks.developer@gmail.com"className="f2 white">chrisdirks.developer@gmail.com</a>
      </form>
    );
  }

}

export default ContactForm;