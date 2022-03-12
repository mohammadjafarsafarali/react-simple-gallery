import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const Gallery = () => {
    const data = [
        {
            img:'https://www.weshare.buzz/images/popularLocation/small_e6b011cfb2eaa59eb00278ebc066c4ee.jpeg',
            place:'New York'
        },
        {
            img:'https://www.weshare.buzz/images/popularLocation/01310e90580242aaa6b1de8029d27d54.jpeg',
            place:'Cambodia'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_e6b011cfb2eaa59eb00278ebc066c4ee.jpeg',
            place:'Oristano'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_9b1373af96b5dff40edd6bd9e7735cdb.jpeg',
            place:'Badford'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_9b1373af96b5dff40edd6bd9e7735cdb.jpeg',
            place:'Badford'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_e6b011cfb2eaa59eb00278ebc066c4ee.jpeg',
            place:'Oristano'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_e6b011cfb2eaa59eb00278ebc066c4ee.jpeg',
            place:'Oristano'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_9b1373af96b5dff40edd6bd9e7735cdb.jpeg',
            place:'Badford'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_9b1373af96b5dff40edd6bd9e7735cdb.jpeg',
            place:'Badford'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_e6b011cfb2eaa59eb00278ebc066c4ee.jpeg',
            place:'Oristano'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_9b1373af96b5dff40edd6bd9e7735cdb.jpeg',
            place:'Badford'
        },
        {
            img:'	https://www.weshare.buzz/images/popularLocation/small_e6b011cfb2eaa59eb00278ebc066c4ee.jpeg',
            place:'Oristano'
        },
    ]
    return (
        <div className='galleryBody'>
         { 
          data.map((item,index)=><GalleryItem idx={index} img={item.img} place={item.place}/>)
         }
        </div>
    );
};

export default Gallery;