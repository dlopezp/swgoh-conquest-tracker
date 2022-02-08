import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest',
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      updateTracker: 'updateTracker',
      mergeTracker: 'mergeTracker'
    })
  }
}
