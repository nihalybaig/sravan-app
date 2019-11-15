import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/stores.scss';
import { REFRESH_RATE, LED_STYLE } from '../constants/AllConstants.jsx';
import * as PlayerActions from '../react/actions/actions.js';

class Store extends Component {

  constructor(props){
    super(props)
      this.state = {
        sixValueArray: [],
        suburbs: this.props.data.suburbs,
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
    }, REFRESH_RATE);
  }

  render() {
    
    const custom_style = LED_STYLE;

    return (
            <div className="store-top-margin">
              <div className="row">
                <span className="col-3 store-label">{this.props.data.name}</span>
              </div>
              <div className="row store-row">
                <div className="col-4">
                  <span className="to-upper-stretch table-heading">Suburb</span>
                </div>
                {
                    custom_style ?
                    this.state.sixValueArray.map((e, i) => {
                        return (<div className="col-1" key={i}>
                                        <span className="table-heading">Position {i+1}</span>
                                </div>)
                      })
                      :
                      <span className="to-upper-stretch table-heading">Positions</span>
                }
              </div>
              <div className="row store-row">
                <div className="col-4">
                  <span className="table-heading">{this.state.suburbName}</span>
                </div>
                {
                  this.state.sixValueArray.map((e, i) => {
                    return (<div className="col-1" key={i}>
                              <span>{e ? 
                                <div className="led-box">
                                    {/* <i className="fa fa-check" aria-hidden="true"></i> */}
                                    {
                                        custom_style ? 
                                        <div className="led-green"></div>
                                        :
                                        <div className="led-on-text table-heading">{i+1}</div>
                                    }
                                </div>
                                :
                                <div className="led-box">
                                    {/* <i className="fa fa-times" aria-hidden="true"></i> */}
                                    {
                                        custom_style ? 
                                        <div className="led-red"></div>
                                        :
                                        <div className="led-off-text table-heading">{i+1}</div>
                                    }
                                </div>
                                }</span>
                            </div>)
                  })
                }
              </div>
              {/* <div onClick={this.props.playerNumber === 10 ? this.props.actions.changePlayerTo7 : this.props.actions.changePlayerTo10 }> Click here to change to LaJoya </div>
              <br/>
              <p> {this.props.playerName} - {this.props.playerNumber} </p>
              <br/><br/> */}
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerName: state.playerName,
    playerNumber: state.playerNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(PlayerActions, dispatch)
  };
};  

export default connect(mapStateToProps,mapDispatchToProps)(Store);