import React from 'react';
import styles from './comp-a.module.css';

export const CompA = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Component A</h3>
    <button className={styles.button}>Click</button>

    <div className={`row ${styles.custom}`}>
      <div
        className={`col s12 m12 ${styles.projectAdditional} ${styles.column}`}
      >
        <ul className={styles.noBullet}>
          <li style={{ fontWeight: '600' }}>
            <i className={styles.materialIcons}>perm_data_setting</i>Beginner{' '}
            <span>difficulty</span>
          </li>
          <li style={{ fontWeight: '600' }}>
            <i className={styles.materialIcons}>history</i>5{' '}
            <span>days remaining</span>
          </li>
          <li style={{ fontWeight: '600' }}>
            <i className={styles.materialIcons}>thumb_up</i>0{' '}
            <span>submissions</span>
          </li>
        </ul>
      </div>
      <div className={`col s12 m12 ${styles.column}`}>
        <ul className={styles.noBullet}>
          <li>
            <i className={styles.materialIcons}>add</i>
            <span>Add</span>
          </li>
        </ul>
      </div>
      <div className={`col s12 m12 ${styles.column}`}>
        <ul className={styles.noBullet}>
          <li>
            <span>Text</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
