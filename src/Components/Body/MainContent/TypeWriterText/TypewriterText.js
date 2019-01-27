import React,{Component} from 'react';
import './TypewriterText.css';

class TypewriterText extends Component {
    constructor({typedText}){
      super();
      this.onAnimComplete.bind(this);
      this.state = {
        text: typedText,
        index: 0,
        currentText: typedText[0]
      }
    }

    onAnimComplete = (event) => { 
      if (event.animationName =='typing') {
        let i = 0;
        if (this.state.index < this.state.text.length - 1) {
          i = this.state.index + 1;
        }
        this.setState({index: i, currentText: this.state.text[i]})
      }
    }

    render(){
      return (
            <div className='writer-container'>
              <div className='typewriter' onAnimationIteration={this.onAnimComplete}>
                <span className="d1" >{this.state.currentText}</span>
              </div>
            </div>
      );
    }


}

export default TypewriterText;