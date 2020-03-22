import React from 'react';
import styles from './style.less';
import cx from 'classnames';

export default () => {
  return (
    <div className="<%= prefix %>page-<%= name %>">
      <h1 className={cx(styles.title, 'global-css')}>Page <%= name %></h1>
    </div>
  );
};
