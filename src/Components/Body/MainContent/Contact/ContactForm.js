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

  async sendEmail() {

    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
      host: "mail.chrisdirks.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'text@chrisdirks.com', // generated ethereal user
        pass: 'Legacy6354' // generated ethereal password
      }
    });

    let mailOptions = {
      from: '"Fred Foo 👻" <test@chrisdirks.com>', // sender address
      to: "chrisdirks1@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    };

    let info = await transporter.sendMail(mailOptions)

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }


  render() {
    return (
      <form className="contactform flex flex-column items-center col-center h-100 mt5">
        <div className='flex row dynamic-row ms'>
          <TypeText typedText={['Questions?', 'Just Saying Hi?', 'Work Together?', 'New Project Idea?']}/>
        </div>
        <div className='flex row row-center  justify-center form-header'>
          <span className='block--sl '>Contact</span>
        </div>
        {/* 
        <div className="flex row col-center input">
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
        <button type="submit" value="Submit" className="w5 h4 mt4 shadow-5"><span className="f-subheadline ">Submit</span></button> 
        */}
        <a onClick={this.sendEmail()} href="mailto:chrisdirks.developer@gmail.com"className="f2 white">chrisdirks.developer@gmail.com</a>
      </form>
    );
  }

}

export default ContactForm;