import modelExtend from 'dva-model-extend'

const model = {
  namespace: "model",
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const pageModel = modelExtend(model, {
  namespace: "pageModel",
  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条数据`,
      current: 1,
      total: 0,
      pageSize: 10,
    },
    searchValue: '',
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },

})


export default {
  model,
  pageModel,
}
