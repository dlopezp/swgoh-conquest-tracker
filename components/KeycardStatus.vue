<template>
  <a-descriptions
    :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }"
    size="small"
    style="padding: 0 10px;"
  >
    <a-descriptions-item :label="$t('keycards.max')">
      {{ keycardsMax }}
    </a-descriptions-item>
    <a-descriptions-item :label="$t('keycards.needed')">
      {{ keycardsNeeded }}
    </a-descriptions-item>
    <a-descriptions-item :label="$t('keycards.starred')">
      <a-badge v-if="keycardsNeeded > keycardsStarred" dot status="error">
        <span>{{ keycardsStarred }}</span>
      </a-badge>
      <span v-else>{{ keycardsStarred }}</span>
    </a-descriptions-item>
    <a-descriptions-item :label="$t('keycards.done')">
      {{ keycardsDone }}
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
import common from '~/mixins/common'

export default {
  mixins: [common],
  computed: {
    keycardsMax () {
      if (!this.tracker?.mode) { return 0 }
      return this.$store.getters.totalKeycardsInMode(this.tracker.mode)
    },
    keycardsNeeded () {
      if (!this.tracker) { return 0 }
      const mode = this.tracker.mode
      if (!mode) { return 0 }
      const conquest = this.conquest[mode]
      const crateSelected = this.tracker[mode]?.crate
      if (!crateSelected) { return 0 }
      return conquest.crates[`${mode}-0${crateSelected}`].keycards
    },
    keycardsStarred () {
      const mode = this.tracker.mode
      if (!mode) { return 0 }
      return this.$store.getters.starredKeycardsInMode(mode)
    },
    keycardsDone () {
      const mode = this.tracker.mode
      if (!mode) { return 0 }
      return this.$store.getters.doneKeycardsInMode(mode)
    }
  }
}
</script>

<style>

</style>
