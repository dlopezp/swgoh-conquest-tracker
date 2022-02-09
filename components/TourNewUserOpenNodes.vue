<template>
  <tour-new-user-step
    :tour="tour"
    :title="$t('tour.newUser.open-nodes.title')"
  >
    <div>{{ $t('tour.newUser.open-nodes.description') }}</div>
  </tour-new-user-step>
</template>

<script>
import TourNewUserStep from './TourNewUserStep.vue'
export default {
  components: { TourNewUserStep },
  props: {
    tour: { type: Object, required: true }
  },
  mounted () {
    this.$nuxt.$on(
      'zone-expanded',
      () => this.tour.nextStep()
    )
  },
  beforeDestroy () {
    this.$nuxt.$off('zone-expanded')
  }
}
</script>

<style>

</style>
