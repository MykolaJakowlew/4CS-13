import React from "react";
import './style.css';
import imageA from './imgs/5e4b1a8c95e491e2e6265a89_photo-1441512673622-3eaa1c39ba28.jpg';
import imageB from './imgs/5e4b1a8c95e4916f85265a88_photo-1433854304641-67729357fe18.jpg';
import Card from './card';

function Content () {
 const cards = [
  {
   image: imageA,
   title: 'Coffee variety macchiato, as organic ut variety caffeine americano',
   description: 'Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk',
   createdAt: 'JUNE 25, 2020',
   tag: 'TRAVEL'
  },
  {
   image: imageB,
   title: 'Coffee variety macchiato, as organic ut variety caffeine americano',
   description: 'Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk',
   createdAt: 'JUNE 25, 2020',
   tag: 'TRAVEL'
  }
 ];
 return (
  <div className="content-container">
   {
    cards.map(el => {
     return (<Card
      image={el.image}
      description={el.description}
      title={el.title}
      tag={el.tag}
      date={el.createdAt}
     />);
    })
   }
  </div>
 );
}

export default Content;
