import React, { Component } from 'react';
import './Body.css'
import LeftBar from './LeftBar/LeftBar';
import MainContent from './MainContent/MainContent';
import TopicData from './PageData';

  
class Body extends Component {
    constructor(props){
      super();
      this.state = {
        displayedContent: 'Home-Default'
      }
    }

    getCategoryData(value){
      
      let cat =  TopicData.find( category => {
        if (category.value == value) {
          return category
        }
      })

      return (cat != undefined)? cat:null;
    }

    componentDidMount (){
        let activeCategory = this.getCategoryData(this.props.active);
        
        if (activeCategory == undefined) {
            console.log("Bad Starting Category", this);
            return;
        }
        
        this.setState({displayedContent: activeCategory.links[0].value});
    }

    componentDidUpdate(prevProps){
      if (this.props.unique != prevProps.unique) {
        let activeCategory = this.getCategoryData(this.props.active);
        this.setState({displayedContent: activeCategory.links[0].value});
      }
    }

    onTopicClick = (val) =>{
        console.log(val);
        this.setState({displayedContent: val})
    }

    render(){
      let activeCategory = this.getCategoryData(this.props.active);
      let prevCategory = this.getCategoryData(this.props.prev);
        return(
            <div className ="Body flex">
                <LeftBar activeCategory={activeCategory} activeTopic={this.state.displayedContent} 
                prevCategory={prevCategory} topicData={TopicData} onTopicClick={this.onTopicClick}/>
                <MainContent activeCategory={activeCategory} activeTopic={this.state.displayedContent} 
                changeCategory={this.props.changeCategory} changeTopic={this.onTopicClick}/>
            </div>
        )
    }
}

export default Body;