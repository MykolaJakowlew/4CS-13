import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import './style.css';
import Card from './card';
import mockCards from './mock/data.json';
import CardArticle from "./card-article";

function Content (props) {
 const cards = mockCards;

 const params = useParams();
 console.log(params);

 const [selectedTag, setSelectedTag] = useState();
 console.log(`selectedTag:${selectedTag}`);
 const [selectedCard, setSelectedCard] = useState(
  props.type == 'all'
   ? cards.find(card => card.id == params.cardId)
   : null
 );
 console.log(`selectedCard:`, selectedCard);

 const tagClick = (tag) => { setSelectedTag(tag); };

 let display;
 if (selectedTag) {
  display = 'block';
 } else {
  display = 'none';
 }

 const showCards = cards.filter(card => {
  if (selectedCard) {
   return false;
  }
  if (selectedTag) {
   return card.tag === selectedTag;
  }
  return true;
 });

 const returnAllPosts = () => {
  setSelectedTag(null);
  setSelectedCard(null);
 };

 return (
  <div className="content-container">
   <div
    className="selected-tag"
    style={{
     display: display, // selectedTag ? 'block' : 'none'
    }}
   >{selectedTag}</div>
   {
    showCards.map(el => {
     return (
      <Link to={`/card/${el.id}`}>
       <Card
        image={el.image}
        description={el.description}
        title={el.title}
        tag={el.tag}
        date={el.date}
        tagClick={tagClick}
        setSelectedCard={() => setSelectedCard(el)}
       />
      </Link>);
    })
   }
   {selectedCard && <CardArticle elem={selectedCard} />}
   <div className="return-button" onClick={returnAllPosts}>All posts</div>
  </div>
 );
}

export default Content;

/**
 * ||
 * &&
 * let a = 56;
 * let b = 78;
 * let 
 * c = a || b; // => 56
 * c = a && b; // => 78
 */