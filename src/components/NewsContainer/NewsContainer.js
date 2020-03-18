import React from 'react';
import NewsArticle from  '../NewsArticle/NewsArticle.js'
import './NewsContainer.css'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
    return (
    <section className="news-container">
    {props.articles.map(category => {
        return <NewsArticle
        headline={category.headline}
        description={category.description}
        img={category.img}
        id={category.id}
        url={category.url}
        key={category.id}
        />
      })}
    </section>
  );
}


export default NewsContainer;