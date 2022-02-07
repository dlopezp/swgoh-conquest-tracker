<template>
  <div class="sector-header">
    <div class="sector-header--left">
      <div class="sector-header--name">{{ $t(sector.title) }}</div>
      <div class="sector-header-keycards">
        Max: {{ totalKeycards }} <img src="~/assets/keycards.png" alt="" style="max-width: 15px;">
      </div>
    </div>
    <div class="sector-header--progress">
      {{ doneKeycards }} / {{ starredKeycards }} <img src="~/assets/keycards.png" alt="" style="max-width: 15px;">
    </div>
  </div>
</template>

<script>
import common from '~/mixins/common'

export default {
  mixins: [common],
  computed: {
    sector () {
      return this.$store.state.conquest[this.tracker.mode].global
    },
    totalKeycards () {
      return this.$store.getters.totalKeycardsInZone(this.tracker.mode, 'global', 'feats')
    },
    doneKeycards () {
      return this.$store.getters.doneKeycardsInZone(this.tracker.mode, 'global', 'feats')
    },
    starredKeycards () {
      return this.$store.getters.starredKeycardsInZone(this.tracker.mode, 'global', 'feats')
    }
  }
}
</script>

<style>

</style>