<template>
  <a-card hoverable style="width: 250px">
    <template slot="actions">
      <a-icon v-if="!tour.isLast" type="close" @click="tour.stop" />
      <a-icon v-if="!tour.isFirst" type="arrow-left" @click="tour.previousStep" />
      <a-icon v-if="!tour.isLast && !requireAction" type="arrow-right" @click="tour.nextStep" />
      <a-spin v-if="requireAction" />
      <a-icon v-if="tour.isLast" type="check" @click="tour.finish" />
    </template>
    <a-card-meta :title="title">
      <template slot="description">
        <slot />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  props: {
    tour: { type: Object, required: true },
    title: { type: String, required: true }
  },
  computed: {
    requireAction () {
      return this.tour.steps[this.tour.currentStep].requireAction
    }
  }
}
</script>

<style>

</style>
