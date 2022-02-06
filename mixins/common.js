import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest',
    })
  },
  methods: {
    ...mapActions({
      updateTracker: 'updateTracker',
      mergeTracker: 'mergeTracker'
    })
  }
}
