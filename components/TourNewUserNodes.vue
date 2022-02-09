<template>
  <tour-new-user-step
    :tour="tour"
    :title="$t('tour.newUser.nodes.title')"
  >
    <div>{{ $t('tour.newUser.nodes.description') }}</div>
  </tour-new-user-step>
</template>

<script>
import TourNewUserStep from './TourNewUserStep.vue'
export default {
  components: { TourNewUserStep },
  props: {
    tour: { type: Object, required: true }
  }
}
</script>

<style>

</style>
