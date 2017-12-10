import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  title: '',
  welcome: '',
  sections: [],
  questions: []
}

// getters
const getters = {
  title: title => state.title,
  welcome: welcome => state.welcome,
  sections: state => state.sections,
  questions: state => state.questions
}

// actions
const actions = {
  loadForm ({ commit, state }, payload) {
    axios.get('./static/mock/form.json')
    .then((response) => {
      let data = response.data
      commit(types.SET_FORM, { sections: data.sections, title: data.title, welcome: data.welcome, questions: data.questions })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

// mutations
const mutations = {
  [types.SET_FORM] (state, payload) {
    state.title = payload.title
    state.welcome = payload.welcome
    state.sections = payload.sections
    state.questions = payload.questions
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
