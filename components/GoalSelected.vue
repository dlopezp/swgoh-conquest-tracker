<template>
  <div class="select-goal">
    <div class="select-goal--crate">
      <img :src="require(`~/assets/crate-0${crate}.png`)" alt="crate" style="max-width: 75px;">
    </div>
    <div class="select-goal--message">
      <div>{{ $t(`modeSelect.${mode}`) }}-0{{ crate }}</div>
      <div>
        {{ keycardsRequired }}
        <img src="~/assets/keycards.png" alt="" style="max-width: 15px;">
      </div>
    </div>
  </div>
</template>

<script>
import common from '~/mixins/common'
export default {
  mixins: [common],
  props: {
    mode: { type: String, required: true },
    crate: { type: Number, required: true }
  },
  computed: {
    keycardsRequired () {
      if (!this.tracker) { return 0 }
      const mode = this.tracker.mode
      if (!mode) { return 0 }
      const conquest = this.conquest[mode]
      if (!conquest) { return 0 }
      const crateSelected = this.tracker[mode]?.crate
      if (!crateSelected) { return 0 }

      return conquest.crates[`${mode}-0${crateSelected}`].keycards
    }
  }
}
</script>

<style>

</style>
