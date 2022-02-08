<template>
  <a-collapse>
    <a-collapse-panel>
      <template slot="header">
        <NodesZoneHeader :sector-alias="sectorAlias" />
      </template>
      <p>{{ $t('sector.nodesKeycardsDescription') }}</p>
      <a-input-number :min="0" :max="66" :default-value="sectorNodesKeycardsDone" @change="onSectorNodesKeycardsDoneChange" />
      <a-input-number :min="0" :max="66" :default-value="sectorNodesKeycardsStarred" @change="onSectorNodesKeycardsStarredChange" />
    </a-collapse-panel>
    <a-collapse-panel>
      <template slot="header">
        <ZoneHeader :sector-alias="sectorAlias" zone-alias="nodesFeats" />
      </template>
      <Feats :sector-alias="sectorAlias" zone-alias="nodesFeats" />
    </a-collapse-panel>
    <a-collapse-panel>
      <template slot="header">
        <ZoneHeader :sector-alias="sectorAlias" zone-alias="minibossFeats" />
      </template>
      <Feats :sector-alias="sectorAlias" zone-alias="minibossFeats" />
    </a-collapse-panel>
    <a-collapse-panel>
      <template slot="header">
        <ZoneHeader :sector-alias="sectorAlias" zone-alias="bossFeats" />
      </template>
      <Feats :sector-alias="sectorAlias" zone-alias="bossFeats" />
    </a-collapse-panel>
  </a-collapse>
<!--
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
  -->
</template>

<script>
import ZoneHeader from './ZoneHeader.vue'
import NodesZoneHeader from './NodesZoneHeader.vue'
import common from '~/mixins/common'

export default {
  name: 'Sector',
  components: { ZoneHeader, NodesZoneHeader },
  mixins: [common],
  props: {
    sector: {
      type: Object,
      required: true
    },
    sectorAlias: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      sectorZones: ['nodesFeats', 'minibossFeats', 'bossFeats']
    }
  },
  computed: {
    sectorKeycards () {
      return this.$store.getters.totalKeycardsInSector(this.tracker.mode, this.sectorAlias)
    },
    sectorNodesKeycardsDone () {
      return this.$store.getters.doneKeycardsInSector(this.tracker.mode, this.sectorAlias)
    },
    sectorNodesKeycardsStarred () {
      return this.$store.getters.starredKeycardsInSector(this.tracker.mode, this.sectorAlias)
    },
    isDone () {
      return this.sectorNodesKeycardsDone > 0 &&
                this.sectorNodesKeycardsDone >= this.sectorNodesKeycardsStarred
    },
    isStarred () {
      return this.sectorNodesKeycardsStarred > 0
    }
  },
  methods: {
    zone (alias) {
      return this.$state.getters.zone(this.tracker.mode, this.sectorAlias, alias)
    },
    onSectorNodesKeycardsDoneChange (strValue) {
      const value = Number(strValue)
      const sectorId = this.$store.getters.sectorId(this.tracker.mode, this.sectorAlias)
      this.mergeTracker({ [sectorId]: { nodesKeycardsDone: value } })
    },
    onSectorNodesKeycardsStarredChange (strValue) {
      const value = Number(strValue)
      const sectorId = this.$store.getters.sectorId(this.tracker.mode, this.sectorAlias)
      this.mergeTracker({ [sectorId]: { nodesKeycardsStarred: value } })
    }
  }
}
</script>

<style>

</style>
