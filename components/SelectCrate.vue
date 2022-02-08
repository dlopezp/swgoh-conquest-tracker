<template>
  <vs-select
    :placeholder="$t('crateSelect.placeholder')"
    :label="$t('crateSelect.label')"
    :label-placeholder="$t('crateSelect.label')"
    :value="crate"
    @input="onCrateChange"
  >
    <vs-select-item value="1" :text="$t('crateSelect.1')" />
    <vs-select-item value="2" :text="$t('crateSelect.2')" />
    <vs-select-item value="3" :text="$t('crateSelect.3')" />
    <vs-select-item value="4" :text="$t('crateSelect.4')" />
    <vs-select-item value="5" :text="$t('crateSelect.5')" />
    <vs-select-item value="6" :text="$t('crateSelect.6')" />
    <vs-select-item value="7" :text="$t('crateSelect.7')" />
  </vs-select>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest'
    }),
    crate () {
      const modeOptions = this.tracker[this.tracker.mode]
      return modeOptions && modeOptions.crate
    }
  },
  methods: {
    ...mapMutations({
      updateTracker: 'UPDATE_TRACKER'
    }),
    onCrateChange (value) {
      this.updateTracker({ [this.tracker.mode]: { crate: value } })
    }
  }
}
</script>

<style>

</style>
