import React from 'react';
import { connect } from 'dva';
import SymoblList from '../components/SymoblList';
import { Switch, Button } from 'antd';

import styles from './Symbols.css';

const Symbols = ({ dispatch, symbols }) => {

  console.log("ui", symbols)
  function handleDelete(record) {
    dispatch({
      type: 'symbols/deletesymbol',
      payload: record,
    });
  }

  this.onChanged = (e) => {
    dispatch({
      type: 'symbols/enablesymbol',
      payload: e,
    });
  }

  return (
    <div>
      <h1 className={styles.center}>Symbol Historys - DingTalk</h1>
      {/* <Button type="primary" icon="setting" size={'small'}>Config</Button> */}
      
      <div className={styles.center}>

      <Switch checked={!!symbols.isenable}
        checkedChildren="非Release版本符号管理-开"
        unCheckedChildren="非Release版本符号管理-关"
        defaultChecked
        onChange={(e) => {
          this.onChanged(e)
        }} />

        <h3>Release版本强制收集</h3>

      </div>

      <SymoblList onDelete={handleDelete} symbols={symbols} />
    </div>
  );
};

// export default Symbols;
export default connect(({ symbols }) => ({
  symbols,
}))(Symbols);