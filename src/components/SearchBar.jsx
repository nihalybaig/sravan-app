import React, { Component } from 'react';
import history from '../history';

//import { withRouter } from 'react-router-dom';
// this also works with react-router-native


export default class SearchBar extends Component {

  constructor(props){
    super(props)
      /* this.state = {
        currentValue: "",
        finalValue: "soft drinks",
        pointer: 0
      } */
      this.state = {
        text: '',
        loopNum: 0,
        showTick: false
      }
  }

  handleType = () => {
    const dataText = ["soft drinks"];
    const { loopNum, text } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];


    if(text.length === (fullText.length-1)){
      this.setState({
        showTick: true
      })
    }

    if(text === fullText){
      history.push("/result-page");
    }
    else{
      this.setState({
        text: fullText.substring(0, text.length + 1),
      });
      if(text === ''){
        this.setState({
          loopNum: loopNum + 1
        });
      }
      
      setTimeout(this.handleType, 150);
    }
    
    
  };

  /* updateValue = () => {
    var listValues = this.state.finalValue.split('');
    var letter;
      for(var i=0;i<listValues.length;i++){
      letter = listValues[i];
      setTimeout(() => { 
        var val = this.state.currentValue + letter;
        this.setState({
          currentValue: val
        })
      }, 1000);
    };
  } */

  componentDidMount() {
    /* this.updateValue() */;
    this.handleType();
  }
    
  render() {

    /* const dataText = "soft drinks";
    const { text, typingSpeed } = this.state; */
    //const i = loopNum % dataText.length;
    //const fullText = dataText[i];

    return (
      <div className="searchcontainer">
        <h4>Search here:</h4>
        <div className="searchbox">
          {/* <input className="searchfield" type="text" placeholder="Search.." value={} onChange={}/> */}
          <div className="searchfield">{this.state.text}</div>
          {
            this.state.showTick ? 
              <span className="search_status">
                <i className="fa fa-check" aria-hidden="true"></i>
              </span>
              :
              null
          }
        </div>
      </div>
    );
  }

}