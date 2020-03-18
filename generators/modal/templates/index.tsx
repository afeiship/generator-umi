import React from 'react';
import styles from './style.less';
import cx from 'classNames';
import { Modal } from 'antd';

export default () => {
  return (
    <Modal title="Modal Title" className={styles['<%= prefix %><%= name %>']}>
      <h1 className={cx(styles.title, 'global-css')}>Page index</h1>
    </Modal>
  );
};
