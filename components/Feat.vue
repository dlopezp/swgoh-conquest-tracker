<template>
  <vs-card class="feat-card" v-bind:class="{ 'feat-card--done': isDone, 'feat-card--starred': isStarred }">
    <div slot="header">
      <h3>{{ $t(feat.title) }}</h3>
    </div>
    <div>
      <span>{{ $t(feat.description) }}</span>
    </div>
    <div>
      <div v-if="editing">
        <vs-textarea :label="$t('feat.comments')" :value="tracker[feat.id] && tracker[feat.id].comments" @change="onEditComments" />
        <vs-button color="primary" type="flat" icon="done" size="small" @click="saveComment"></vs-button>
      </div>
      <div v-else>
        <p v-if="comments">{{ comments }}</p>
        <vs-button color="primary" type="flat" icon="edit" size="small" @click="editComments"></vs-button>
      </div>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button color="danger" :type="isDone ? 'filled' : 'border'" :icon="isDone ? 'task_alt' : 'radio_button_unchecked'" size="small" @click="done"></vs-button>
        <vs-button color="primary" :type="isStarred ? 'filled' : 'border'" :icon="isStarred ? 'star' : 'star_border'" size="small" @click="toDo"></vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
import common from '~/mixins/common'

export default {
  props: { feat: Object },
  mixins: [ common ],
  computed: {
    featsDone () {
      return this.tracker.done || []
    },
    featsStarred () {
      return this.tracker.starred || []
    },
    isDone () {
      return this.featsDone.includes(this.feat.id)
    },
    isStarred () {
      return this.featsStarred.includes(this.feat.id)
    },
    comments () {
      return this.tracker[this.feat.id]?.comments || ''
    }
  },
  data () {
    return { editing: false }
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
    },
    done () {
      const newDone = (this.isDone)
        ? this.featsDone.filter(doneId => doneId !== this.feat.id)
        : [ ...this.featsDone, this.feat.id ]
      this.updateTracker({ done: newDone })
      setTimeout(() => document.activeElement.blur(), 0)
    },
    toDo () {
      const newStarred = (this.isStarred)
        ? this.featsStarred.filter(starredId => starredId !== this.feat.id)
        : [ ...this.featsStarred, this.feat.id ]
      this.updateTracker({ starred: newStarred })
      setTimeout(() => document.activeElement.blur(), 0)
    }
  }
}
</script>

<style>
.feat-card footer button {
  margin-left: 5px;
}
.feat-card .vs-card--footer {
  transform: none;
}
.feat-card--starred {
  background-color: rgba(var(--vs-warning), .2);
}
.feat-card--done {
  background-color: rgba(var(--vs-success), .2);
}
</style>