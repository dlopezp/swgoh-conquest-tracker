import merge from 'deepmerge'

export const state = () => ({
  user: null,
  tracker: null,
  conquest: null
})

export const getters = {
  isLoggedIn: state => !!state.user,
  user: state => state.user,
  conquest: state => state.conquest,
  getTracker: state => state.tracker || {}
}

export const actions = {
  async onAuthStateChangedAction ({ commit }, { authUser, claims }) {
    // console.log('onAuthStateChangedAction', { authUser, claims })
    if (!authUser) {
      const strTracker = localStorage.getItem('tracker')
      if (strTracker) {
        const tracker = JSON.parse(strTracker)
        commit('SET_TRACKER', { tracker })
      }
      return
    }

    const userTracker = await this.$fire.firestore.collection('tracker').doc(authUser.uid).get()
    if (userTracker.exists) {
      const tracker = userTracker.data()
      commit('SET_TRACKER', { tracker })
    }
  },
  async logout () {
    await this.$fire.auth.signOut()
  },
  async updateTracker ({ commit, state }, prop) {
    const newTracker = { ...(state.tracker || {}), ...prop }
    commit('SET_TRACKER', { tracker: newTracker })

    if (!state.user) {
      localStorage.setItem('tracker', JSON.stringify(newTracker))
      return
    }

    await this.$fire.firestore.collection('tracker').doc(state.user.uid).set(newTracker)
  },
  async mergeTracker ({ commit, state }, prop) {
    const newTracker = merge((state.tracker || {}), prop)
    commit('SET_TRACKER', { tracker: newTracker })

    if (!state.user) {
      localStorage.setItem('tracker', JSON.stringify(newTracker))
      return
    }

    await this.$fire.firestore.collection('tracker').doc(state.user.uid).set(newTracker)
  }
}

export const mutations = {
  SET_CONQUEST: (state, { conquest }) => { state.conquest = conquest },
  SET_TRACKER: (state, { tracker }) => { state.tracker = tracker },
  UPDATE_TRACKER (state, prop) {
    const newTracker = { ...(state.tracker || {}), ...prop }
    state.tracker = newTracker
  },
  MERGE_TRACKER (state, prop) {
    const newTracker = merge(state.tracker, prop)
    state.tracker = newTracker
  },
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    // console.log('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims })
    if (!authUser) {
      state.user = null
      state.tracker = null
    } else {
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      state.user = { uid, email, emailVerified, displayName, photoURL }
    }
  }
}