import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'

function IndexPage() {
  return (
    <div className="App">
        <Button type="primary">Button</Button>
      </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
