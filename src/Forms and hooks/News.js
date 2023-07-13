import React from 'react';
import './news.css';

function News({news}) {
   
  return (
    <div className='news-card' >
        <img  src={news.urlToImage} alt={news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <a href={news.url} target="_blank">know more</a>

    </div>
  )
}

export default News