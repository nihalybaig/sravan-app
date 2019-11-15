import React, { Component } from 'react';
import '../styles/stores.scss'

export default class Store2 extends Component {

  constructor(props){
    super(props)
      this.state = {
        sixValueArray: [],
        suburbs: ['Wolli Creek', 'Central'],
        movingIndex: 0
      }
  }

  generateValues = () => {
    var tempIndex =  (this.state.movingIndex+1)%this.state.suburbs.length;
    var tempArray = Array.from({length: 6}, () => Math.random() >= 0.5);
    this.setState({
      movingIndex: tempIndex,
      suburbName: this.state.suburbs[this.state.movingIndex],
      sixValueArray: tempArray,
    });
  }

  componentDidMount(){
    this.generateValues();
    setInterval(() => {
      this.generateValues();
    }, 2000);
  }

  render() {
    return (
            <div className="store-top-margin">
              <div className="row">
                <span className="col-4 store-label">Woolworths</span>
              </div>
              <div className="row store-row">
                <div className="col-4">
                  <span>Suburb</span>
                </div>
                {
                  this.state.sixValueArray.map((e, i) => {
                    return (<div className="col-1" key={i}>
                              <span>Position {i+1}</span>
                            </div>)
                  })
                }
              </div>
              <div className="row store-row">
                <div className="col-4">
                  <span>{this.state.suburbName}</span>
                </div>
                {
                  this.state.sixValueArray.map((e, i) => {
                    return (<div className="col-1" key={i}>
                              <span>{e ? 
                                <i class="fa fa-check" aria-hidden="true"></i>
                                :
                                <i class="fa fa-times" aria-hidden="true"></i>
                              }</span>
                            </div>)
                  })
                }
              </div>
            </div>
    );
  }
}

