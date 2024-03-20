// components/Layout.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css'; // Import CSS module styles

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          {/* Render the Hamburger component */}
          
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
