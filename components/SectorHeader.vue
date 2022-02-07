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
  props: { sectorAlias: String },
  mixins: [common],
  computed: {
    sector () {
      return this.$store.state.conquest[this.tracker.mode][this.sectorAlias]
    },
    totalKeycards () {
      return this.$store.getters.totalKeycardsInSector(this.tracker.mode, this.sectorAlias)
    },
    doneKeycards () {
      return this.$store.getters.doneKeycardsInSector(this.tracker.mode, this.sectorAlias)
    },
    starredKeycards () {
      return this.$store.getters.starredKeycardsInSector(this.tracker.mode, this.sectorAlias)
    }
  }
}
</script>

<style>

</style>