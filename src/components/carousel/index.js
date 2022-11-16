import React from "react";
import './style.css';
// https://www.npmjs.com/package/react-material-ui-carousel
import Carousel from 'react-material-ui-carousel';

const colors = ['red', 'blue', 'green', 'pink'];
const sentences = [
 'Officia Lorem sunt laborum incididunt fugiat nulla reprehenderit pariatur eu nisi commodo non tempor commodo.',
 'Anim nulla eiusmod Lorem incididunt aute laborum non.',
 'Irure elit occaecat laborum dolor sint incididunt aliqua est.'
];
function MyCarousel () {

 return (
  <div className="my-carousel-wrapper">
   <Carousel height={'500px'}>
    {/* {colors.map(color => <div
     style={{ backgroundColor: color }}
     className="my-carousel-item"></div>)} */}
    {
     sentences.map(text => <div className="my-carousel-item">{text}</div>)
    }
   </Carousel>
  </div>
 );
}

export default MyCarousel;