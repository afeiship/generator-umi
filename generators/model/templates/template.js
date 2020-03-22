export default {
  namespace: '<%= name %>',
  state: {},

  reducers: {
    setUser(state, { data }) {
      return {
        ...state
      };
    }
  },
  effects: {},
  subscriptions: {
    setup({ dispatch }) {
      console.log('<%= name %> setup!');
    }
  }
};
