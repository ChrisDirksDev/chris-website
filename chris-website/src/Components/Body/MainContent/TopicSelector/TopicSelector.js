import React, {Component} from 'react';
import './TopicSelector.css';
import TopicItem from './TopicItem';
import Arrow from '../right-arrow-outline.svg'
class TopicSelector extends Component{
  constructor(props){
    super(props);
    this.state = {
      orientation: 'deg0'
    }
  }
    onItemHover = (event, value) => {
      this.setState({orientation: value});
    }

  render(){
      return (
        <div className="TopicSelector pt4 flex-col w-50-l w-100-m h-50-l h-100-m">
          <div className='row flex'>
            <div className='pb4 pr4 w-50-l border-gradient-bottem-left border-gradient-right-up relative flex'>
              <TopicItem img={this.props.Images[0]} content={this.props.Content[0]} hoverEvent={this.onItemHover} value={'deg45'} click={this.props.click} clickValue={1}/>
            </div>
            <div className="pb4 pl4 w-50-l border-gradient-bottem-right-full relative flex">
              <TopicItem img={this.props.Images[1]} content={this.props.Content[1]} hoverEvent={this.onItemHover} value={'deg135'} click={this.props.click} clickValue={2}/>
            </div>
          </div>
          <div className='row flex'>
            <div className=' pt4 pr4 w-50-l border-gradient-right-down-full relative flex'>
              <TopicItem img={this.props.Images[2]} content={this.props.Content[2]} hoverEvent={this.onItemHover} value={'deg315'} click={this.props.click} clickValue={3}/>
            </div>
            <div className="pt4 pl4 w-50-l flex">
              <TopicItem img={this.props.Images[3]} content={this.props.Content[3]} hoverEvent={this.onItemHover} value={'deg225'} click={this.props.click} clickValue={4}/>
            </div>
          </div>

          <img className={"selectorArrow " + this.state.orientation} orientation={this.state.orientation} src={Arrow}/>
        </div>
      );
    }
  

}

export default TopicSelector;