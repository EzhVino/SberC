import React from 'react';
import { useEffect, useState } from 'react';
import { KittenImg } from './KittenImg/KittenImg';

import styles from './Header.module.css';

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.name}>CAT</h1>
          <h2 className={styles.decrypt}>currencies academic terms</h2>
        </div>

        {width > 498 ? <KittenImg /> : null}
      </header>
    </>
  );
};
