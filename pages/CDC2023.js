import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const CDC2023Page = () => {
  return (
    <Layout>
      <div>
        <Navbar />
        <h1 className={styles['layout-h1']}>CDC 2023</h1>
        <h2 className={styles['layout-h2']}>Data analysis done with my teammates on the CDC 2023 competition</h2>
        <div className={styles.container2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '20px' }}>
            <Link href="https://github.com/brentonlian/CDC2023_Business">Github link</Link>
          </span>
        </div>
        <div className={styles.imgContainer} style={{ paddingTop: '20px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/MotsFinissantEnABDet.jpg" alt="Regular Expression" height="300" width="500" />
        </div>
      </div>
    </Layout>
  );
};

export default CDC2023Page;
