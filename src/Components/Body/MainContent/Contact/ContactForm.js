import React, {Component} from 'react';
import './ContactForm.css';
import emailIcon from './email.png'
import userIcon from './user.png'
import messageIcon from './edit.png'
import TypeText from '../TypeWriterText/TypewriterText'
import Abutton from '../../../Utils/AButton';

class ContactForm extends Component {
  constructor(sendEmail){
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      emailSent: false,

      touched: {
        name: false,
        email: false,
        message: false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Snagged from stack exchange
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validate = (state) =>{

    return {
      'name': state.name.length == 0,
      'email': state.email.length == 0 || !this.validateEmail(state.email),
      'message': state.message.length == 0
    }

  }
  handleBlur = (field) => (event) =>{
    this.setState({
      touched: { ...this.state.touched, [field]: true}
    });
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

  canSubmit(){
    const errors = this.validate(this.state);
    const submitDisabled = Object.keys(errors).some( x => errors[x]);
    return !submitDisabled;
  }

  handleSubmit = async () => {
    if (!this.canSubmit()) {
      return;
    }

    this.props.sendEmail(this.state.name + ' ' + this.state.email, this.state.message)
      .then(resp => {
      

    })
      

  }



  render() {

    const errors = this.validate(this.state);
    const submitDisabled = Object.keys(errors).some( x => errors[x]);

    const showError = (input) => {
      const hasError = errors[input];
      const shouldShow = this.state.touched[input];

      return hasError ? shouldShow : false;
    }

    if(this.state.emailSent){
      return(
        <div className="mt5 ">
          <span className="email_confirmation sl"> Email Sent!</span>
        </div>
      )
    }else{
      return (
        <>
          <div className="disabled-overlay"><h1>Sorry, the contact form is currently disabled.</h1></div>
        <form className="contactform flex flex-column items-center col-center h-100 mt5">
          <div className='flex row contactform__dynamic-row'>
            <TypeText typedText={['Questions?', 'Just Saying Hi?', 'Work Together?', 'New Project Idea?']}/>
          </div>
          <div className='flex flex-column col-center'>
            <div className='flex row row-center justify-center contactform__header'>
              <span className='block--sl '>Contact</span>
            </div>
            <div className={(showError('name')? "input--red":"") +" flex row col-center input contactform__name-input"}>
              <img src={userIcon}/>
              <input
                className='ms text-input' 
                type="text"
                value={this.state.name}
                onChange={this.nameChange}
                placeholder="Name"
                onBlur={this.handleBlur('name')}
              />
            </div>
            <div className={(showError('email')? "input--red":"") + " flex row col-center input contactform__email-input"}>
              <img src={emailIcon}/>
              <input
                className='ms text-input' 
                type="text"
                value={this.state.email}
                onChange={this.emailChange}
                placeholder='Email'
                onBlur={this.handleBlur('email')}
              />
            </div>
            <div className={(showError('message')? "input--red":"") + " flex row flex-start input contactform__message-input"}>
              <img src={messageIcon}/>
              <textarea
                className='ms text-input'
                value={this.state.message}
                onChange={this.messageChange}
                placeholder='Your Message'
                onBlur={this.handleBlur('message')}
                />
            </div>
          </div>
          <div className={( submitDisabled? 'div--disabled':'') + ' flex items-center pt4 f2'}>
            <Abutton text='Submit' callback={this.handleSubmit}/>
          </div>
          </form>
          </>
      );
    }
  }

}

export default ContactForm;