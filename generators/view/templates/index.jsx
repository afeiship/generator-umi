import React from 'react';
import styles from './style.less';
import cx from 'classnames';

export default () => {
  return (
    <div className={styles['<%= prefix %><%= name %>']}>
      <h1 className={cx(styles.title, 'global-css')}>Page index</h1>
    </div>
  );
};
