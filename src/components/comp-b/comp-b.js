import React from 'react';
import styles from './comp-b.module.css';

export const CompB = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Component B</h3>
    <button className={styles.button}>Click</button>
  </div>
);
