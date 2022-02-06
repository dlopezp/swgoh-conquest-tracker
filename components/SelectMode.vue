<template>
  <vs-select
    :placeholder="$t('modeSelect.placeholder')"
    :label="$t('modeSelect.label')"
    :label-placeholder="$t('modeSelect.label')"
    :value="tracker.mode"
    @input="onModeChange"
    >
    <!-- ToDo: conseguir los datos del modo fácil -->
    <!-- <vs-select-item value="easy" :text="$t('modeSelect.easy')" /> -->
    <vs-select-item value="normal" :text="$t('modeSelect.normal')" />
    <vs-select-item value="hard" :text="$t('modeSelect.hard')" />
  </vs-select>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest',
    })
  },
  methods: {
    ...mapMutations({
      updateTracker: 'UPDATE_TRACKER'
    }),
    onModeChange (value) {
      this.updateTracker({ mode: value })
    }
  }
}
</script>

<style>

</style>