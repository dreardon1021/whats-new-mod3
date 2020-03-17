import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  return (
    <article className="article-card">
      <img className="article-image" src={props.img} alt="article"></img>
      {props.headline}
      {props.description}
    </article>
  )
}

export default NewsArticle;