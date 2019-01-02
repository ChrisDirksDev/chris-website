import React, { Component } from 'react';
import './Body.css'
import LeftBar from './LeftBar/LeftBar';
import MainContent from './MainContent/MainContent';

const Links = [
    {
      id: 1,
      value: 'HOME',
      title: 'Home',
      links: [
        {
          id: 0,
          title: 'Home',
          value: 'Default'
        }
      ]
    },
    {
      id: 2,
      value: 'INTERESTS',
      title: 'Interests',
      links: [
        {
          id: 0,
          title: 'Pick an Interest',
          value: 'Default'
        },
        {
          id: 1,
          title: 'Pets',
          value: 'iPets'
        },
        {
          id: 2,
          title: 'Development',
          value: 'iDevelopment'
        },
        {
          id: 3,
          title: 'Games',
          value: 'iGames'
        },
        {
          id: 4,
          title: 'Anime',
          value: 'iAnime'
        },
      ]
    },
    {
      id: 3,
      value: 'PROJECTS',
      title: 'Projects',
      links: [
        {
          id: 0,
          title: 'Pick a Project',
          value: 'Default'
        },
        {
          id: 1,
          title: 'Game Engine',
          value: 'pEngine'
        },
        {
          id: 2,
          title: 'Discord Bot',
          value: 'pBot'
        },
        {
          id: 3,
          title: 'This Website',
          value: 'pWebsite'
        },
        {
          id: 4,
          title: 'Early Work',
          value: 'pEarly'
        },
      ]
    },
    {
      id: 4,
      value: 'CONTACTME',
      title: 'Contact Me',
      links: [
        {
          id: 0,
          title: 'Contact Me',
          value: 'Default'
        }
      ]
    },
    {
      id: 5,
      value: 'POLICY',
      title: 'Privacy Policy',
      links: [
        {
          id: 0,
          title: 'Privacy Policy',
          value: 'Default'
        }
      ]
    }
  ];

  
class Body extends Component {
    constructor(props){
      super();
      this.state = {
        displayedContent: 0,
      }
    }

    componentDidMount (){
        let activeGroup = Links.find( group => {
            return group.value == this.props.active;
        })

        if (activeGroup == undefined) {
            console.log("Bad Starting Group", this);
            return;
        }
    }

    componentDidUpdate(prevProps){
      if (this.props.unique != prevProps.unique) {
        this.setState({displayedContent: 0});
      }
    }

    onTopicClick = (val) =>{
        console.log(val);
        
        this.setState({displayedContent: val})
    }

    render(){

        return(
            <div className ="body flex">
                <LeftBar active={this.props.active} activeLink={this.state.displayedContent} prev={this.props.prev} links={Links} onTopicClick={this.onTopicClick}/>
                <MainContent topic={this.props.active} content = {this.state.displayedContent!=''? this.state.displayedContent:0} onContactClick={this.onContactClick} onTopicClick={this.onTopicClick}/>
            </div>
        )
    }
}

export default Body;