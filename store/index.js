import merge from 'deepmerge'
import * as Sector from '~/src/sector'

export const state = () => ({
  user: null,
  isNewUser: false,
  tracker: null,
  conquest: null
})

export const getters = {
  isLoggedIn: state => !!state.user,
  isNewUser: state => state.isNewUser,
  user: state => state.user,
  conquest: state => state.conquest,
  getTracker: state => state.tracker || {},

  sectorId: state => (mode, sectorAlias) => state.conquest[mode][sectorAlias].id,
  sector: state => (mode, sectorAlias) => state.conquest[mode][sectorAlias],

  zone: state => (mode, sectorAlias, zoneAlias) => state.conquest[mode][sectorAlias][zoneAlias],

  totalKeycardsInMode: (_state, getters) => (mode) => {
    return getters.totalKeycardsInSector(mode, 'sector1') +
      getters.totalKeycardsInSector(mode, 'sector2') +
      getters.totalKeycardsInSector(mode, 'sector3') +
      getters.totalKeycardsInSector(mode, 'sector4') +
      getters.totalKeycardsInSector(mode, 'sector5') +
      getters.totalKeycardsInZone(mode, 'global', 'feats')
  },
  totalKeycardsInSector: state => (mode, sectorAlias) => {
    const conquest = state.conquest[mode]
    const sector = conquest[sectorAlias]
    return state.conquest.nodesPerSector * state.conquest.keycardsPerNode +
      Sector.keycardsByZone(sector.nodesFeats) +
      Sector.keycardsByZone(sector.minibossFeats) +
      Sector.keycardsByZone(sector.bossFeats)
  },
  totalKeycardsInZone: state => (mode, sectorAlias, zoneAlias) => {
    const conquest = state.conquest[mode]
    const sector = conquest[sectorAlias]
    const zone = sector[zoneAlias]
    return Sector.keycardsByZone(zone)
  },
  totalKeycardsInSectorNodes: state => state.conquest.nodesPerSector * state.conquest.keycardsPerNode,

  starredIds: state => state.tracker.starred || [],
  starredKeycardsInMode: (_state, getters) => (mode) => {
    return getters.starredKeycardsInSector(mode, 'sector1') +
      getters.starredKeycardsInSector(mode, 'sector2') +
      getters.starredKeycardsInSector(mode, 'sector3') +
      getters.starredKeycardsInSector(mode, 'sector4') +
      getters.starredKeycardsInSector(mode, 'sector5') +
      getters.starredKeycardsInZone(mode, 'global', 'feats')
  },
  starredKeycardsInSector: (_state, getters) => (mode, sectorAlias) => {
    return getters.starredKeycardsInSectorNodes(mode, sectorAlias) +
      getters.starredKeycardsInZone(mode, sectorAlias, 'nodesFeats') +
      getters.starredKeycardsInZone(mode, sectorAlias, 'minibossFeats') +
      getters.starredKeycardsInZone(mode, sectorAlias, 'bossFeats')
  },
  starredKeycardsInSectorNodes: state => (mode, sectorAlias) => {
    return state.tracker[state.conquest[mode][sectorAlias].id]?.nodesKeycardsStarred || 0
  },
  starredKeycardsInZone: (state, getters) => (mode, sectorAlias, zoneAlias) => {
    const zone = state.conquest[mode][sectorAlias][zoneAlias]
    return zone.reduce(
      (carry, feat) => {
        return carry + (getters.starredIds.includes(feat.id) ? feat.keycards : 0)
      },
      0
    )
  },

  doneIds: state => state.tracker.done || [],
  doneKeycardsInMode: (_state, getters) => (mode) => {
    return getters.doneKeycardsInSector(mode, 'sector1') +
      getters.doneKeycardsInSector(mode, 'sector2') +
      getters.doneKeycardsInSector(mode, 'sector3') +
      getters.doneKeycardsInSector(mode, 'sector4') +
      getters.doneKeycardsInSector(mode, 'sector5') +
      getters.doneKeycardsInZone(mode, 'global', 'feats')
  },
  doneKeycardsInSector: (_state, getters) => (mode, sectorAlias) => {
    return getters.doneKeycardsInSectorNodes(mode, sectorAlias) +
      getters.doneKeycardsInZone(mode, sectorAlias, 'nodesFeats') +
      getters.doneKeycardsInZone(mode, sectorAlias, 'minibossFeats') +
      getters.doneKeycardsInZone(mode, sectorAlias, 'bossFeats')
  },
  doneKeycardsInSectorNodes: state => (mode, sectorAlias) => {
    return state.tracker[state.conquest[mode][sectorAlias].id]?.nodesKeycardsDone || 0
  },
  doneKeycardsInZone: (state, getters) => (mode, sectorAlias, zoneAlias) => {
    const zone = state.conquest[mode][sectorAlias][zoneAlias]
    return zone.reduce(
      (carry, feat) => {
        return carry + (getters.doneIds.includes(feat.id) ? feat.keycards : 0)
      },
      0
    )
  }
}

export const actions = {
  async onAuthStateChangedAction ({ commit }, { authUser }) {
    if (!authUser) {
      const strTracker = localStorage.getItem('tracker')
      if (strTracker) {
        const tracker = JSON.parse(strTracker)
        commit('SET_TRACKER', { tracker })
      }
      return
    }

    const isNewUserDoc = await this.$fire.firestore.collection('users').doc(authUser.uid).get()
    const isNewuser = !isNewUserDoc.exists
    if (isNewuser) {
      commit('SET_NEW_USER', isNewuser)
      await this.$fire.firestore.collection('users').doc(authUser.uid).set({ registered: true, email: authUser.email })
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
  SET_NEW_USER (state, isNew) {
    state.isNewUser = isNew
  },
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    if (!authUser) {
      state.user = null
      state.tracker = null
    } else {
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      state.user = { uid, email, emailVerified, displayName, photoURL }
    }
  }
}
