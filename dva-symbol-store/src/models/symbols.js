import { delay } from 'dva/saga';
import { listSymbol, deleteSymbol, enableSymbol, isenableSymbol } from '../services/symbols'

import { message, Button } from 'antd';


const insert = (arr, index, ...newItems) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted items
    ...newItems,
    // part of the array after the specified index
    ...arr.slice(index)
]

/*
    "comment": "abcfdsf",
	"product": "dingtalk",
	"store_path": "d:\\a",
	"version": "v111",
	"symbol_path": "pdb",
	"date": "2018-08-27 08:05:46.935000",
	"store_id": "41"
 */
export default {
    namespace: 'symbols',
    state: {
        datas: [],
        loading: true,
        isenable: false,
    },
    reducers: {       
        'onload'(state, { payload: data }) {
            console.log('onload_state', state);
            console.log('onload_data', data);
            state.datas = data.data;
            state.loading = false;
            return { ...state };
        },
        'loading'(state) {
            console.log('loading', state);
            state.loading = true;
            state.datas = [];            
            return { ...state };
        },
        'onisenable'(state, { payload: data }) {            
            console.log('onisenable', data);
            state.isenable = data.data.enable;
            return { ...state };
        },
    },
    effects: {
        *featchsymbols(action, { select, put, call }) {
            console.log('featchsymbols', action.payload);
            // const isLogin = yield select(state => state.isLogin);
            // console.log('logincheck', isLogin);

            yield put({ type: 'loading' });            
            const datas = yield listSymbol().catch(() => []);

            //const datas = yield call(listSymbol, {});
            console.log('featchsymbols', datas);

            yield put({ type: "onload", payload: datas });
        },
        *deletesymbol(action, { select, put, call }) {
            console.log('deletesymbol', action);
            yield put({ type: 'loading' });
            const result = yield deleteSymbol(action.payload).then(() => true).catch(() => false);
            console.log('result', result);
            if (result) {
                message.info('delete succeeded');
            } else {
                message.error('delete failed');
            }

            yield put({ type: "featchsymbols" });
        },
        *isenablesymbol(action, { select, put, call }) {
            console.log('isenablesymbol', action);
       
            const result = yield isenableSymbol(action.payload).catch(() => {});
            console.log('result', result);
           
            yield put({ type: "onisenable", payload: result });
        },
        *enablesymbol(action, { select, put, call }) {
            console.log('enablesymbol', action);
       
            const result = yield enableSymbol(action.payload).catch(() => {});
            console.log('result', result);
            if (result) {
                message.info('enable settings succeeded');
            } else {
                message.error('enalbe settings failed');
            }

            yield put({ type: 'isenablesymbol', payload: { a: 1 } });
        },
        
    },
    subscriptions: {
        setup({ history, dispatch }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/' || pathname === '/symbols') {
                    console.log("/symbols");
                    dispatch({ type: 'featchsymbols', payload: { a: 1 } });
                    dispatch({ type: 'isenablesymbol', payload: { a: 1 } });
                }
            });
        }

    },
};