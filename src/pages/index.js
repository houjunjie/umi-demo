import React from 'react';
import { connect } from 'dva';
import { Redirect } from 'dva/router';
// import styles from './index.css';

function IndexPage() {
  return (
    <div>
      <Redirect to="/advertising" />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
