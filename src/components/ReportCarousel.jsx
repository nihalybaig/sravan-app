import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/reportPageCarousel.css';
import { REPORT_CAROUSEL_IMAGES } from '../constants/AllConstants.jsx';

export default class ReportCarousel extends Component {
    
    handleImageError(event) {
        if (this.props.defaultImage &&
            event.target.src.indexOf(this.props.defaultImage) === -1) {
          event.target.src = this.props.defaultImage;
        }
      }
    
    renderMyItem = (item) => {
        const onImageError = this.handleImageError
        const imageLocation = require("../res/images/"+item);
        
        var renderingItem = <div className='image-gallery-image'>
                                <img
                                    src={imageLocation}
                                    alt={""}
                                    onError={onImageError.bind(this)}
                                />
                            </div>

        return (
            <div>
                {renderingItem}         
            </div>
            ) 
        }
    
  render() {

    const images = REPORT_CAROUSEL_IMAGES
    
    return (
          <ImageGallery 
            items={images} 
            showNav={false}
            showPlayButton={false}
            showBullets={false}
            showFullscreenButton={false}
            showThumbnails={false}
            useBrowserFullscreen={false}
            autoPlay={true}
            renderItem={this.renderMyItem}/>
    );
  }

}