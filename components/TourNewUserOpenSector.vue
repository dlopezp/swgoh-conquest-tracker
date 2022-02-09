<template>
  <tour-new-user-step
    :tour="tour"
    :title="$t('tour.newUser.sector.title')"
  >
    <div>{{ $t('tour.newUser.sector.description') }}</div>
    <div>{{ $t('tour.newUser.sector.description_2') }}</div>
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
      'sector-expanded',
      () => this.tour.nextStep()
    )
  },
  beforeDestroy () {
    this.$nuxt.$off('sector-expanded')
  }
}
</script>

<style>

</style>
