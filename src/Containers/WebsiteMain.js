import React, { Component } from 'react';
import './WebsiteMain.css';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Footer from '../Components/Footer/Footer';

//catagory list
const CATAGORIES = [
  'HOME',
  'PROJECTS',
  'INTERESTS',
  'CONTACTME',
  'POLICY'
]

class WebsiteMain extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: CATAGORIES[0],
      previousCategory: '',
    }
  }

  changeCategory = (category) => {

    let aLink = CATAGORIES.find((Link) => {
      return Link.toString() === category;
    })
    if (aLink === undefined) {
      console.log('Unlisted Catagory Requested', category);
      return
    }

    this.setState({ currentCategory: aLink, previousCategory: this.state.currentCategory })
  }

  render() {
    return (
      <div className="websitemain flex">
        <Header changeCategory={this.changeCategory} category={this.state.currentCategory} />
        <Body changeCategory={this.changeCategory} active={this.state.currentCategory}
          prev={this.state.previousCategory} unique={Date.now()} />
        <Footer policyClick={this.changeCategory} />
      </div>
    );
  }
}

export default WebsiteMain;
