import React from 'react';
import NewsArticle from  '../NewsArticle/NewsArticle.js'
import local from '../../data/local.js'
import './NewsContainer.css'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = () => {
    return (
    <section className="news-container">
    {local.map(article => {
        return <NewsArticle
        headline={article.headline}
        description={article.description}
        img={article.img}
        id={article.id}
        url={article.url}
        key={article.id}
        />
      })}
    </section>
  );
}


export default NewsContainer;