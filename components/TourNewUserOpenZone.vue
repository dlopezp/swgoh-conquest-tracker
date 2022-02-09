<template>
  <tour-new-user-step
    :tour="tour"
    :title="$t('tour.newUser.zone.title')"
  >
    <div>{{ $t('tour.newUser.zone.description') }}</div>
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
