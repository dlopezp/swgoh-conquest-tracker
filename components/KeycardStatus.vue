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
import { keycardsByConquest } from '~/src/sector'

export default {
  mixins: [common],
  computed: {
    keycardsMax () {
      if (!this.tracker.mode) { return 0 }
      const conquest = this.conquest[this.tracker.mode]
      return keycardsByConquest(conquest)
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
      const conquest = this.conquest[mode]
      return this.starredKeycardsInConquest(conquest)
    },
    keycardsDone () {
      const mode = this.tracker.mode
      if (!mode) { return 0 }
      const conquest = this.conquest[mode]
      return this.doneKeycardsInConquest(conquest)
    },
    starredIds () {
      return this.tracker.starred || []
    },
    doneIds () {
      return this.tracker.done || []
    }
  },
  methods: {
    starredKeycardsInConquest (conquest) {
      return this.starredKeycardsInSector(conquest.sector1) +
        this.starredKeycardsInSector(conquest.sector2) +
        this.starredKeycardsInSector(conquest.sector3) +
        this.starredKeycardsInSector(conquest.sector4) +
        this.starredKeycardsInSector(conquest.sector5) +
        this.starredKeycardsInZone(conquest.global.feats)
    },
    starredKeycardsInSector (sector) {
      return this.starredKeycardsInSectorNodes(sector) +
        this.starredKeycardsInZone(sector.nodesFeats) +
        this.starredKeycardsInZone(sector.minibossFeats) +
        this.starredKeycardsInZone(sector.bossFeats)
    },
    starredKeycardsInSectorNodes (sector) {
      return this.tracker[sector.id]?.nodesKeycardsStarred || 0
    },
    starredKeycardsInZone (zone) {
      return zone.reduce(
        (carry, feat) => {
          return carry + (this.starredIds.includes(feat.id) ? feat.keycards : 0)
        },
        0
      )
    },
    doneKeycardsInConquest (conquest) {
      return this.doneKeycardsInSector(conquest.sector1) +
        this.doneKeycardsInSector(conquest.sector2) +
        this.doneKeycardsInSector(conquest.sector3) +
        this.doneKeycardsInSector(conquest.sector4) +
        this.doneKeycardsInSector(conquest.sector5) +
        this.doneKeycardsInZone(conquest.global.feats)
    },
    doneKeycardsInSector (sector) {
      return this.doneKeycardsInSectorNodes(sector) +
        this.doneKeycardsInZone(sector.nodesFeats) +
        this.doneKeycardsInZone(sector.minibossFeats) +
        this.doneKeycardsInZone(sector.bossFeats)
    },
    doneKeycardsInSectorNodes (sector) {
      return this.tracker[sector.id]?.nodesKeycardsDone || 0
    },
    doneKeycardsInZone (zone) {
      return zone.reduce(
        (carry, feat) => carry + this.doneIds.includes(feat.id) ? feat.keycards : 0,
        0
      )
    }
  }
}
</script>

<style>

</style>
