<template>
  <tour-new-user-step
    :tour="tour"
    :title="$t('tour.newUser.chooseReward.title')"
  >
    <div>{{ $t('tour.newUser.chooseReward.description') }}</div>
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
      'goal-opened',
      ({ open }) => {
        if (open) {
          document.querySelector('.v-tour').style.display = 'none'
        }
      }
    )
    this.$nuxt.$on(
      'goal-selected',
      () => {
        document.querySelector('.v-tour').style.display = ''
        this.tour.nextStep()
      }
    )
  },
  beforeDestroy () {
    this.$nuxt.$off('goal-selected')
    this.$nuxt.$off('goal-opened')
  }
}
</script>

<style>

</style>
