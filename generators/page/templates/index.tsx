import React from 'react';
import styles from './style.less';
import cx from 'classNames';

export default () => {
  return (
    <div className="container">
      <h1 className={cx(styles.title, 'global-css')}>Page index</h1>
    </div>
  );
};
