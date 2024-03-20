import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu} style={{ fontSize: '24px', padding: '10px' }}>
        ☰
      </button>
      {isOpen && (
        <div className="menu" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Add your menu items here */}
          <a href="/" style={{ textDecoration: 'none' }}>Home</a>
          <a href="/CDC2023" style={{ textDecoration: 'none' }}>CDC 2023</a>
          <a href="/RedditSentimentAnalysis" style={{ textDecoration: 'none' }}>Reddit Sentiment Analysis</a>
          <a href="/RegexResearch" style={{ textDecoration: 'none' }}>Regex Research</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
