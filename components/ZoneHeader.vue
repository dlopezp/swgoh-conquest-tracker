<template>
  <div class="sector-header">
    <div class="sector-header--left">
      <div class="sector-header--name">
        {{ $t(`sector.${zoneAlias}Title`) }}
      </div>
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
  props: {
    sectorAlias: {
      type: String,
      required: true
    },
    zoneAlias: {
      type: String,
      required: true
    }
  },
  computed: {
    zone () {
      return this.$store.state.conquest[this.tracker.mode][this.sectorAlias][this.zoneAlias]
    },
    totalKeycards () {
      return this.$store.getters.totalKeycardsInZone(this.tracker.mode, this.sectorAlias, this.zoneAlias)
    },
    doneKeycards () {
      return this.$store.getters.doneKeycardsInZone(this.tracker.mode, this.sectorAlias, this.zoneAlias)
    },
    starredKeycards () {
      return this.$store.getters.starredKeycardsInZone(this.tracker.mode, this.sectorAlias, this.zoneAlias)
    }
  }
}
</script>

<style>

</style>
