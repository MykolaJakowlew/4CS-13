import React from 'react';
import './style.css';

const getHeaderComponent = (text) => {
  return (
    <div className='article-header'>{text}</div>
  );
};

const getTextComponent = (text) => {
  return (
    <div className='article-text'>{text}</div>
  );
};

function CardArticle (props) {
  const { elem } = props;
  return (
    <div className='card-article'>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${window.location.origin}${elem.image})` }}
      ></div>
      <div
        onClick={elem.setSelectedCard}
        className="card-title"
      >
        {elem.title}
      </div>
      <div className="card-description">{elem.description}</div>
      {
        elem.fullPage.map(el => {
          switch (el.type) {
            case 'header': {
              return getHeaderComponent(el.text);
            }
            case 'text': {
              return getTextComponent(el.text);
            }
            default: { }
          }

          // if (el.type === 'header') {
          //  ...
          // } else if (el.type === 'text') {
          //  ...
          // } else if (el.type === 'list') {
          //  ...
          // } else {
          //  ...
          // }

          /**
           * ==
           * 5 == 5    => true
           * 5 == '5'  => true
           * ===
           * 5 === 5   => true
           * 5 === '5' => false
           */
        })
      }
    </div>
  );
}

export default CardArticle;