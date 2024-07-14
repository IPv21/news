import React, { useEffect } from 'react';
import techImg from '../assets/images/tech.jpg';
import worldImg from '../assets/images/world.jpg';
import sportsImg from '../assets/images/sports.jpg';
import scienceImg from '../assets/images/science.jpg';
import nationImg from '../assets/images/nation.jpg';
import healthImg from '../assets/images/health.jpg';
import entertainmentImg from '../assets/images/entertainment.jpg';
import demoImg from '../assets/images/demo.jpg';
import './news.css';
import axios from 'axios';
import { useState } from 'react';

const News = () => {

const [headline, setHeadline] = useState(null);

const [news, setNews] = useState([]);

useEffect(() => {
  const fetchNews = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=0b78156c69708cbada67624177915992`;
    const response = await axios.get(url);
    setHeadline(fetchNews[0]);
    const fetchedNews = response.data.articles;
    console.log(fetchedNews[0]);
    console.log(response);
  };

  fetchNews();
}, []);

  return (
    <div className='news-app'>
      <div className='news-header'>
        <h1 className='logo'>News</h1>
      </div>
      <div className='news-content'>
        <nav className='navbar'>
          <h1 className='nav-heading'>Categories</h1>
          <div className='categories'>
            <a href="#" className="nav-link">General</a>
            <a href="#" className="nav-link">World</a>
            <a href="#" className="nav-link">Business</a>
            <a href="/technology" className="nav-link">Technology</a>
            <a href="#" className="nav-link">Entertainment</a>
            <a href="#" className="nav-link">Sports </a>
            <a href="#" className="nav-link">Science</a>
            <a href="#" className="nav-link">Health</a>
            <a href="#" className="nav-link">Nation</a>
          </div>
        </nav>
        <div className="news-section">
      {headline && (
        <div className="headline" onClick={() => handleArticleClick(headline)}>
          <img src={headline.image || noImg} alt={headline.title} />
          <h2 className="headline-title">{headline.title}</h2>
        </div>
      )}
    </div>
          <div className='news-grid-item'>
            <img src={techImg} alt="Headline Image" />
            <h2 className='headline-title'>E plorum Bun u In em'</h2>
          </div>
        
          <div className='news-grid-item'>
             <img src={sportsImg} alt="Sports News" />
            <h3>E plorunpumpus thius is the news world h3</h3>
          </div>

          <div className='news-grid-item'>
             <img src={worldImg} alt="World News" />
            <h3>E plorunpumpus thius is the news world h3</h3>
          </div>

          <div className='news-grid-item'>
             <img src={scienceImg} alt="Science News" />
            <h3>This is the Science H3 headline</h3>
          </div>

          <div className='news-grid-item'>
             <img src={nationImg} alt="National News" />
            <h3>This is the National News H3 headline</h3>
          </div>

          <div className='news-grid-item'>
             <img src={healthImg} alt="World News" />
            <h3>This is the Health News H3 headline3</h3>
          </div>

          <div className='news-grid-item'>
          <img src={entertainmentImg} alt="Entertainment News" />
    <h3>This is the Entertainment news h3 headline</h3>
  </div>
  <footer>
    <div className='copyright'>
      <span>NEWS APP SPAN</span>
      <div>&copy; All Rights Reserved. By Matthew Shuman.</div>
    </div>
  </footer>
</div>
</div>

  );
};

export default News;
