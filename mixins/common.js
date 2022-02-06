import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest',
    })
  },
  methods: {
    ...mapMutations({
      updateTracker: 'UPDATE_TRACKER',
      mergeTracker: 'MERGE_TRACKER'
    })
  }
}
