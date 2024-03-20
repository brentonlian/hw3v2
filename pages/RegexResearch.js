import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const RegexResearchPage = () => {
  return (
    <Layout>
      <Navbar />
      <h1 className={styles['layout-h1']}>Regex Research</h1>
      <h2 className={styles['layout-h2']}>Research done on ReDOS vulnerability for the summer 2022 CSIRE program</h2>
      <div className={styles.container2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '20px' }}>
          <Link href="https://github.com/brentonlian/RegexResearch">Github link</Link>
        </span>
      </div>
      <div className={styles.imgContainer} style={{ paddingTop: '20px' }}>
        <img src="https://live.staticflickr.com/3851/14762982307_f1c5819f00_z.jpg" alt="Data Analysis" />
      </div>
    </Layout>
  );
};

export default RegexResearchPage;
