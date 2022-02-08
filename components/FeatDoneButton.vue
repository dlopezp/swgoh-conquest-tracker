<template>
  <a-button
    shape="circle"
    :icon="isDone ? 'check-circle' : 'check'"
    :type="isDone ? 'primary' : 'dashed'"
    @click="done"
  />
</template>

<script>
import common from '~/mixins/common'

export default {
  mixins: [common],
  props: { feat: { type: Object, required: true } },
  computed: {
    featsDone () {
      return this.tracker.done || []
    },
    isDone () {
      return this.$store.getters.doneIds.includes(this.feat.id)
    }
  },
  methods: {
    done () {
      const newDone = (this.isDone)
        ? this.featsDone.filter(doneId => doneId !== this.feat.id)
        : [...this.featsDone, this.feat.id]
      this.updateTracker({ done: newDone })
    }
  }
}
</script>

<style>

</style>
