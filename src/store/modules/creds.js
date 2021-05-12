const state = {
  creds: {
    access_token: '',
    refresh_token: ''
  }
};

const getters = {
  getCreds: (state) => state.creds
};

const actions = {
  setCreds: ({commit}, creds) => {
    commit('setCreds', creds)
  },
};

const mutations = {
  setCreds: ({creds}, {access_token, refresh_token}) => {
    creds.access_token = access_token
    creds.refresh_token = refresh_token
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}