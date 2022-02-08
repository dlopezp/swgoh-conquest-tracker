<template>
  <a-list item-layout="vertical" :data-source="zone" class="feats">
    <a-list-item slot="renderItem" slot-scope="item">
      <span slot="actions">
        <FeatDoneButton :feat="item" />
        <FeatStarButton :feat="item" />
      </span>
      <a-list-item-meta :description="$t(item.description)">
        <div slot="title">
          {{ $t(item.title) }}
        </div>
      </a-list-item-meta>
      <FeatComments :feat="item" />
    </a-list-item>
  </a-list>
</template>

<script>
import FeatComments from './FeatComments.vue'
import FeatDoneButton from './FeatDoneButton.vue'
import FeatStarButton from './FeatStarButton.vue'
import common from '~/mixins/common'

export default {
  components: { FeatComments, FeatDoneButton, FeatStarButton },
  mixins: [common],
  props: {
    sectorAlias: { type: String, required: true },
    zoneAlias: { type: String, required: true }
  },
  computed: {
    zone () {
      return this.$store.state.conquest[this.tracker.mode][this.sectorAlias][this.zoneAlias]
    }
  },
  methods: {
    isDone (feat) {
      return this.$store.getters.doneIds.includes(feat.id)
    },
    isStarred (feat) {
      return this.$store.getters.starredIds.includes(feat.id)
    }
  }
}
</script>

<style>

</style>
