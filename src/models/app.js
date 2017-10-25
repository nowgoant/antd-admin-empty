/* global window */
/* global document */
/* global location */
import { routerRedux } from 'dva/router'
import { query } from 'services/app'

export default {
  namespace: 'app',
  state: {
    user: {},
    permissions: {
      visit: [],
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'query' })
      // let tid
      window.onresize = () => {
        // clearTimeout(tid)
        // tid = setTimeout(() => {
        //   dispatch({ type: 'changeNavbar' })
        // }, 300)
      }
    },

  },
  effects: {
    * query({
      payload,
    }, { call, put }) {
      // const { success } = yield call(query, payload)
      // if (success) {
      //   yield put({
      //     type: 'updateState',
      //   })

      //   if (location.pathname === '/login') {
      //     yield put(routerRedux.push({
      //       pathname: '/',
      //     }))
      //   }
      // }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
