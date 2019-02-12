import React, {Component} from 'react';
import './ContactForm.css';
import emailIcon from './email.png'
import userIcon from './user.png'
import messageIcon from './edit.png'
import TypeText from '../TypeWriterText/TypewriterText'
import Abutton from '../../../Utils/AButton';

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      nameDefault: 'Your name',
      name:'',
      emailDefault: 'Your email',
      email:'',
      messageDefault:'Your message',
      message:'',
      emailSent:false
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

  sendEmail = async () => {

    fetch('https://immense-hollows-28003.herokuapp.com/mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    }).then( resp =>{
      console.log("email request complete", resp.status);
    })
    this.setState({emailSent: true});
    // Preview only available when sending through an Ethereal account
  }


  render() {
    if(this.state.emailSent){
      return(
        <div className="mt5 ">
          <span className="email_confirmation sl"> Email Sent!</span>
        </div>
      )
    }else{
      return (
        <form className="contactform flex flex-column items-center col-center h-100 mt5">
          <div className='flex row contactform__dynamic-row'>
            <TypeText typedText={['Questions?', 'Just Saying Hi?', 'Work Together?', 'New Project Idea?']}/>
          </div>
          <div className='flex flex-column col-center'>
          <div className='flex row row-center justify-center contactform__header'>
            <span className='block--sl '>Contact</span>
          </div>
          <div className="flex row col-center input contactform__name-input">
            <img src={userIcon}/>
            <input
              className='ms text-input' 
              type="text"
              value={this.state.name}
              onChange={this.nameChange}
              placeholder={this.state.nameDefault}
            />
          </div>
          <div className="flex row col-center input  contactform__email-input">
            <img src={emailIcon}/>
            <input
              className='ms text-input' 
              type="text"
              value={this.state.email}
              onChange={this.emailChange}
              placeholder={this.state.emailDefault}
            />
          </div>
          <div className="flex row flex-start input contactform__message-input">
            <img src={messageIcon}/>
            <textarea
              className='ms text-input'
              value={this.state.message}
              onChange={this.messageChange}
              placeholder={this.state.messageDefault}/>
          </div>
          
  
          </div>
          <div className='flex items-center pt4 f2'>
            <Abutton text='Submit' callback={this.sendEmail}/>
          </div>
         
        </form>
      );

    }
  }

}

export default ContactForm;