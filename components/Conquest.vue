<template>
  <div v-if="tracker.mode">
    <a-collapse class="conquest-collapse" @change="onChange">
      <a-collapse-panel v-for="sector in sectors" :key="sector">
        <template slot="header">
          <SectorHeader :sector-alias="sector" />
        </template>
        <Sector :sector-alias="sector" />
      </a-collapse-panel>
      <a-collapse-panel>
        <template slot="header">
          <SectorGlobalHeader />
        </template>
        <Feats sector-alias="global" zone-alias="feats" />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
import SectorHeader from './SectorHeader.vue'
import Sector from './Sector.vue'
import common from '~/mixins/common'

export default {
  components: { SectorHeader, Sector },
  mixins: [common],
  data () {
    return {
      sectors: ['sector1', 'sector2', 'sector3', 'sector4', 'sector5']
    }
  },
  methods: {
    onChange () {
      this.$nextTick(
        () => this.$nuxt.$emit('sector-expanded')
      )
    }
  }
}
</script>
