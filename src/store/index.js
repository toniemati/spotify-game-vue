import { createStore } from 'vuex'
import creds from './modules/creds.js'
import playlist from './modules/playlist.js'

export default createStore({
  modules: {
    creds,
    playlist
  }
})
