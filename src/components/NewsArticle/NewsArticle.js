import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article className="article-card">
      <img className="article-image" src={props.img} alt="article"></img>
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <div className="card-footer">
        <a href={props.url}>Click here to view Article</a>
      </div>
    </article>
  )
}

export default NewsArticle;