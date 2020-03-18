import React from 'react';
import NewsArticle from  '../NewsArticle/NewsArticle.js'
import './NewsContainer.css'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
    return (
    <section className="news-container">
    {console.log(props.articles)}
    {props.articles.map(category => {
      return category.map(article => {
        return <NewsArticle
        headline={article.headline}
        description={article.description}
        img={article.img}
        id={article.id}
        url={article.url}
        key={article.id}
        />
        })
      })}
    </section>
  );
}


export default NewsContainer;