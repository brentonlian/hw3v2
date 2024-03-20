// pages/YourPage.js

import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link' //Links

const YourPage = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
  };

  return (
    <>
      <Head>
        <title>Your Custom Title</title>
      </Head>
      <html>
        <head>
          {/* Other head content */}
        </head>
        <body>
          <header>
            <nav>
              <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className="menu">
                {/* Menu items */}
              </ul>
            </nav>
          </header>
          {/* Page content */}
        </body>
      </html>
    </>
  );
};

export default YourPage;
