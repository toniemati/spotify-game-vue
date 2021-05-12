const state = {
  creds: {
    login: '',
    password: ''
  }
};

const getters = {
  getLogin: (state) => state.creds.login
};

const actions = {
  setLogin: ({commit}, login) => {
    commit('setLogin', login);
  },
};

const mutations = {
  setLogin: ({creds}, login) => {
    creds.login = login;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}