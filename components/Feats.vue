<template>
  <a-list item-layout="vertical" :data-source="zone" class="feats">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <span slot="actions">
        <FeatDoneButton :feat="item" />
        <FeatStarButton :feat="item" />
      </span>
      <a-list-item-meta :description="$t(item.description)">
        <div slot="title">{{ $t(item.title) }}</div>
      </a-list-item-meta>
      <FeatComments :feat="item" />
    </a-list-item>
  </a-list>
  <!-- <div>
    <div v-for="(feat, index) in feats" :key="feat.id">
      <feat :feat="feat" />
      <vs-divider v-if="index !== feats.length - 1" />
    </div>
  </div> -->
</template>

<script>
import common from '~/mixins/common'
import FeatComments from './FeatComments.vue'
import FeatDoneButton from './FeatDoneButton.vue';
import FeatStarButton from './FeatStarButton.vue';

export default {
    props: { sectorAlias: String, zoneAlias: String },
    mixins: [common],
    computed: {
        zone() {
            return this.$store.state.conquest[this.tracker.mode][this.sectorAlias][this.zoneAlias];
        }
    },
    methods: {
        isDone(feat) {
            return this.$store.getters.doneIds.includes(feat.id);
        },
        isStarred(feat) {
            return this.$store.getters.starredIds.includes(feat.id);
        }
    },
    components: { FeatComments, FeatDoneButton, FeatStarButton }
}
</script>

<style>

</style>