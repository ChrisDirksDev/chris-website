import React, { Component } from 'react';
import './WebsiteMain.css';
import Header from '../Components/Header/Header';
import LeftBar from '../Components/LeftBar/LeftBar';
import MainContent from '../Components/MainContent/MainContent';

const activeLink = [
  'HOME',
  'PROJECTS',
  'INTERESTS',
  'CONTACTME'
]

const displayedContent = [
  'HOME',
  'PROJECTS',
  'INTERESTS',
  'CONTACTME'
]

class WebsiteMain extends Component {
  constructor(){
    super();
    this.state = {
      Link : activeLink[0],
      leftHideShow : false,
      prevLink: '',
      displayedContent: ''
    }
  }

  onLinkChange = (event, val) =>{
    let hideshow = false;
    let aLink = activeLink.find((Link) =>{
      return Link.toString() === val.value.toString();
    })
    if (aLink === undefined) 
      return
    if (this.state.Link != aLink && (this.state.Link === 'PROJECTS'|| this.state.Link ==='INTERESTS')&&(aLink.includes('PROJECTS') || aLink.includes('INTERESTS'))) {
      hideshow = true;
      this.setState({leftHideShow: true})
    }
    
    this.setState({Link: aLink, leftHideShow:hideshow, prevLink:this.state.Link})
  }

  onContactClick = (event) => {
    let mObj = {value: activeLink[3]};
    this.onLinkChange(null,mObj)
  }

  render() {
    return (
      <div className="WebsiteMain Flex">
          <Header onLinkChange = {this.onLinkChange} activeLink = {this.state.Link}/>
          <div className ="Left-Content-Container Flex">
            <LeftBar leftHideShow={this.state.leftHideShow} activeLink = {this.state.Link} prevLink ={this.state.prevLink}/>
            <MainContent activeLink = {this.state.Link} onContactClick={this.onContactClick}/>
          </div>
      </div>
    );
  }
}

export default WebsiteMain;
