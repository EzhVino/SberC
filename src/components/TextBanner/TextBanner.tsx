import React from 'react';
import { createPortal } from 'react-dom';
import styles from './TextBanner.module.css';

interface ITextBanner {
  text: string;
}
const TextBanner = ({ text }: ITextBanner) => {
  return createPortal(
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
    </div>,
    document.querySelector('#portal-root' || 'body')!,
  );
};

export default TextBanner;
