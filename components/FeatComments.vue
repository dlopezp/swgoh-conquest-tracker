<template>
  <div v-if="editing">
    <a-textarea
      :placeholder="$t('feat.comments')"
      :auto-size="{ minRows: 2 }"
      :value="tracker[feat.id] && tracker[feat.id].comments"
      @change="onEditComments"
    />
    <a-button type="dashed" shape="circle" icon="check" @click="saveComment" />
  </div>
  <div v-else>
    <p v-if="comments">
      {{ comments }}
    </p>
    <a-button shape="circle" icon="edit" @click="editComments" />
  </div>
</template>

<script>
import common from '~/mixins/common'

export default {
  mixins: [common],
  props: { feat: { type: Object, required: true } },
  data () {
    return { editing: false }
  },
  computed: {
    isDone () {
      return this.$store.getters.doneIds.includes(this.feat.id)
    },
    isStarred () {
      return this.$store.getters.starredIds.includes(this.feat.id)
    },
    comments () {
      return this.tracker[this.feat.id]?.comments || ''
    }
  },
  methods: {
    editComments () {
      if (!this.tracker[this.feat.id]) {
        this.updateTracker({ [this.feat.id]: { comments: '' } })
      }
      this.editing = true
    },
    saveComment () { this.editing = false },
    onEditComments ($event) {
      this.updateTracker({ [this.feat.id]: { comments: $event.target.value } })
    }
  }
}
</script>

<style>

</style>
