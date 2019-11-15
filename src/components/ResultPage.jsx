import React, { Component } from 'react';
import Store from './Store';
import { STORE_DATA } from '../constants/AllConstants';
import ReportCarousel from './ReportCarousel';
import history from '../history';


export default class ResultPage extends Component {
    
  render() {

    return (
        <div>
          <div className="result-page">
            <span>
              <i className="fa fa-arrow-left" aria-hidden="true" onClick={()=>{history.push("/")}}></i>
            </span>
            <h4 className="inline-block">Search term "soft drinks":</h4>
            {
              STORE_DATA.map((d)=>{
                return(<Store data={d} key={d.id}/>)
              })
            }
          </div>
          <ReportCarousel/>
          <img className="result-img" src={require("../res/Capture.JPG")} alt={""}></img>
        </div>
    );
  }

}