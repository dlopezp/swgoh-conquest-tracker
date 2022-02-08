<template>
  <div />
</template>

<script setup>
import { mapGetters } from 'vuex'
import Sector from '~/components/Sector.vue'
import SelectMode from '~/components/SelectMode.vue'
import SelectCrate from '~/components/SelectCrate.vue'
import KeycardStatus from '~/components/KeycardStatus.vue'

export default {
  components: { Sector, SelectMode, SelectCrate, KeycardStatus },
  // layout: (ctx) => ctx.$device.isMobile ? 'mobiletracker' : 'tracker',
  layout: 'mobiletracker',
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest'
    })
  },
  data () {
    return {
      sectors: ['sector1', 'sector2', 'sector3', 'sector4', 'sector5']
    }
  }
}
</script>

<style>
</style>
