<template>
  <div>
    <h1>asdas</h1>
    <!--
    <select-mode />
    <select-crate />

    <keycard-status />

    <fragment v-if="tracker.mode">
      <sector v-for="sector in sectors" :key="sector" :sector="conquest[tracker.mode][sector]" />

      <vs-card>
        <div slot="header">
          <h3>{{ $t(conquest[tracker.mode].global.title) }}</h3>
        </div>
        <div>
          <feats :feats="conquest[tracker.mode].global.feats" />
        </div>
      </vs-card>
    </fragment>
    <fragment v-else>
      <p>{{ $t('tracker.no_mode') }}</p>
    </fragment>
    -->
  </div>
</template>

<script setup>
import Sector from '~/components/Sector.vue'
import SelectMode from '~/components/SelectMode.vue'
import SelectCrate from '~/components/SelectCrate.vue'
import KeycardStatus from '~/components/KeycardStatus.vue'

import { mapGetters } from 'vuex'

export default {
  components: { Sector, SelectMode, SelectCrate, KeycardStatus },
  layout: (ctx) => ctx.$device.isMobile ? 'mobiletracker' : 'tracker',
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest',
    })
  },
  data () {
    return {
      sectors: [ 'sector1', 'sector2', 'sector3', 'sector4', 'sector5' ]
    }
  }
}
</script>

<style>
</style>
