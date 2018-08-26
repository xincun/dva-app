const insert = (arr, index, ...newItems) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted items
    ...newItems,
    // part of the array after the specified index
    ...arr.slice(index)
]

function saveToService(params) {
    console.log('saveToService', params);
    // for (let index = 0; index < 1; index) {
    // }
}

export default {
    namespace: 'products',
    state: {
        datas:[],
        need_load:false,
    },
    reducers: {
        'delete'(state, { payload: id }) {
            console.log('delete', state);
            return state.datas.filter(item => item.id !== id);
        },
        'load'(state) {
            console.log('loading', state);
            state.datas = insert(state.datas, 0, { name: 'abc1111', id: 3 });
            return state.datas
        },
    },
    effects: {
        *save( action , { select, put, call }) {
            console.log('save', action.payload);
            // const isLogin = yield select(state => state.isLogin);
            // console.log('logincheck', isLogin);

            yield call(saveToService, action.payload);
            yield put({ type: 'load' });
        }
    },
    subscriptions: {
        setup({ history, dispatch }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/products') {
                    console.log("/products");
                    dispatch({ type: 'save', payload:{a:1} });
                }
            });
        }

    },
};