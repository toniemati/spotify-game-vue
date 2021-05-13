const state = {
  playlist: {}
};

const getters = {
  getPlaylist: (state) => state.playlist
};

const actions = {
  setPlaylist: ({ commit }, pl) => {
    commit('setPlaylist', pl)
  },
  clearPlaylist: ({ commit }) => {
    commit('clearPlaylist')
  }
};

const mutations = {
  setPlaylist: (state, pl) => {
    state.playlist = pl
  },
  clearPlaylist: (state) => {
    state.playlist = {}
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}