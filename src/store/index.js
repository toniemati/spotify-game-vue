import { createStore } from 'vuex'
import creds from './modules/creds.js'

export default createStore({
  modules: {
    creds
  }
})
