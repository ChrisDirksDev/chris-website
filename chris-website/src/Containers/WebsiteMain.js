import React, { Component } from 'react';
import './WebsiteMain.css';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
const activeLink = [
  'HOME',
  'PROJECTS',
  'INTERESTS',
  'CONTACTME',
  'POLICY'
]

const PageContent = [
  {
    Catagory: 'HOME',
    Pages: [
      {
        id: 1,
        value: 'Default'
      }
    ]
  },
  {
    Catagory: 'INTERESTS',
    Pages: [
      {
        id: 1,
        value: 'Default'
      }
    ]
  },
  {
    Catagory: 'HOME',
    Pages: [
      {
        id: 1,
        value: 'Default'
      }
    ]
  },
  {
    Catagory: 'HOME',
    Pages: [
      {
        id: 1,
        value: 'Default'
      }
    ]
  },

]

class WebsiteMain extends Component {
  constructor(){
    super();
    this.state = {
      Link : activeLink[0],
      prevLink: '',
      displayedContent: '',
    }
  }

  onLinkChange = (event, val) =>{
    let hideshow = false;
    let aLink = activeLink.find((Link) =>{
      return Link.toString() === val.value.toString();
    })
    if (aLink === undefined) 
      return
    
    this.setState({Link: aLink, leftHideShow:hideshow, prevLink:this.state.Link})
  }

  onContactClick = (event) => {
    let mObj = {value: activeLink[3]};
    this.onLinkChange(null, mObj)
  }

  policyClick = () =>{
    let mObj = {value: "POLICY"};
    this.onLinkChange(null, mObj);
  }

  render() {
    return (
      <div className="WebsiteMain Flex">
          <Header onLinkChange = {this.onLinkChange} activeLink = {this.state.Link}/>
          <Body active={this.state.Link} prev={this.state.prevLink} unique={Date.now()}/>
          <Footer policyClick={this.policyClick}/>
      </div>
    );
  }
}

export default WebsiteMain;
