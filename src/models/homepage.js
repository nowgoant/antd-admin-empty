import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { model } from 'models/common'

export default modelExtend(model, {
  namespace: 'homepage',
  state: {
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // history.listen(({ pathname }) => {
      // if (pathname === '/dashboard' || pathname === '/') {
      //   dispatch({ type: 'query' })
      // }
      // })
    },
  },
  effects: {
    * query({
    payload,
  }, { call, put }) {
      // const data = yield call(query, parse(payload))
      // yield put({
      //   type: 'updateState',
      //   payload: data,
      // })
    },
  },
})
