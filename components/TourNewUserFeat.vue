<template>
  <tour-new-user-step
    :tour="tour"
    :title="$t('tour.newUser.feat.title')"
  >
    <p>{{ $t('tour.newUser.feat.description') }}</p>
    <p>{{ $t('tour.newUser.feat.description_2') }}</p>
    <div>{{ $t('tour.newUser.feat.description_3') }}</div>
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
