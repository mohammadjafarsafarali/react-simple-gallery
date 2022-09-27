import React from 'react';
import './Gallery.css';

const GalleryItem = ({img, idx, place}) => {
    const bgStyle = {
        backgroundImage: `url(${img})`,
    }
    return (
        <div className={`galleryItemBody ${idx === 1 && ' bigItem'}`}>
            <a href={img} target="_blank">
                <div style={bgStyle} className='galleryImg'/>
            </a>
            {/*<div className='galleryImageOverlay'><h3>{place}</h3></div>*/}
        </div>
    );
};

export default GalleryItem;