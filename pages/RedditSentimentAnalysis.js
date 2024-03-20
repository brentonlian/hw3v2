import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const RedditSentimentAnalysisPage = () => {
  return (
    <Layout>
      <div>
        <Navbar />
        <h1 className={styles['layout-h1']}>Reddit Sentiment Analysis</h1>
        <h2 className={styles['layout-h2']}>Sentiment analysis on the UNC Chapel Hill Reddit</h2>
        <div className={styles.container2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '20px' }}>
            <Link href="https://github.com/brentonlian/RedditSentimentAnalysis">Github Link</Link>
          </span>
        </div>
        {/* Additional content */}
        <time dateTime="2016-10-25" suppressHydrationWarning />
        <div className={styles.imgContainer} style={{ paddingTop: '20px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/4/4d/UNC_Chapel_Hill_seal.svg/1200px-UNC_Chapel_Hill_seal.svg.png" alt="UNC" width="300" height="300" />
        </div>
      </div>
    </Layout>
  );
};

export default RedditSentimentAnalysisPage;
