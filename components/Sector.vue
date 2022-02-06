<template>
  <vs-card>
    <div slot="header">
      <div class="sector-header">
        <h3>{{ $t(sector.title) }}</h3>
        <span>{{ sectorKeycards }}<img src="~/assets/keycards.png" alt=""></span>
      </div>
    </div>
    <div>
      <vs-collapse>
        <vs-collapse-item>
          <div slot="header">
            {{ $t('sector.nodesKeycards') }}
          </div>
          <vs-card class="feat-card" v-bind:class="{ 'feat-card--done': isDone, 'feat-card--starred': isStarred }">
            <div slot="header">
              <h3>{{ $t('sector.nodesKeycardsTitle') }}</h3>
            </div>
            <div>
              <span>{{ $t('sector.nodesKeycardsDescription') }}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-input-number
                  color="success"
                  min="0"
                  max="66"
                  :value="sectorNodesKeycardsDone"
                  @input="onSectorNodesKeycardsDoneChange" />
                <vs-input-number
                  min="0"
                  max="66"
                  :value="sectorNodesKeycardsStarred"
                  @input="onSectorNodesKeycardsStarredChange" />
              </vs-row>
            </div>
          </vs-card>
        </vs-collapse-item>
        <vs-collapse-item>
          <div slot="header">
            {{ $t('sector.nodesFeatsTitle') }}
          </div>
          <feats :feats="sector.nodesFeats" />
        </vs-collapse-item>
        <vs-collapse-item>
          <div slot="header">
            {{ $t('sector.minibossFeatsTitle') }}
          </div>
          <feats :feats="sector.minibossFeats" />
        </vs-collapse-item>
        <vs-collapse-item>
          <div slot="header">
            {{ $t('sector.bossFeatsTitle') }}
          </div>
          <feats :feats="sector.bossFeats" />
        </vs-collapse-item>
      </vs-collapse>
    </div>
  </vs-card>
</template>

<script>
import { keycardsBySector } from '~/src/sector'
import common from '~/mixins/common'

export default {
  name: "Sector",
  props: { sector: Object },
  mixins: [ common ],
  computed: {
    sectorKeycards () {
      return keycardsBySector(this.sector)
    },
    sectorNodesKeycardsDone () {
      return this.tracker[this.sector.id]?.nodesKeycardsDone || 0
    },
    sectorNodesKeycardsStarred () {
      return this.tracker[this.sector.id]?.nodesKeycardsStarred || 0
    },
    isDone () {
      return this.sectorNodesKeycardsDone > 0
        && this.sectorNodesKeycardsDone >= this.sectorNodesKeycardsStarred
    },
    isStarred () {
      return this.sectorNodesKeycardsStarred > 0
    }
  },
  data () {
    return {
      sectorZones: [ 'nodesFeats', 'minibossFeats', 'bossFeats' ]
    }
  },
  methods: {
    onSectorNodesKeycardsDoneChange (strValue) {
      const value = Number(strValue)
      this.mergeTracker({ [this.sector.id]: { nodesKeycardsDone: value } })
    },
    onSectorNodesKeycardsStarredChange (strValue) {
      const value = Number(strValue)
      this.mergeTracker({ [this.sector.id]: { nodesKeycardsStarred: value } })
    }
  }
}
</script>

<style>

</style>