<template>
  <a-button
    shape="circle"
    :icon="isStarred ? 'star' : 'star'"
    :type="isStarred ? 'primary' : 'dashed'"
    @click="star"
  />
</template>

<script>
import common from '~/mixins/common'

export default {
  mixins: [common],
  props: { feat: { type: Object, required: true } },
  computed: {
    featsStarred () {
      return this.tracker.starred || []
    },
    isStarred () {
      return this.featsStarred.includes(this.feat.id)
    }
  },
  methods: {
    star () {
      const newStarred = (this.isStarred)
        ? this.featsStarred.filter(starredId => starredId !== this.feat.id)
        : [...this.featsStarred, this.feat.id]
      this.updateTracker({ starred: newStarred })
    }
  }
}
</script>

<style>

</style>
