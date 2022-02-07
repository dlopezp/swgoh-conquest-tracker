<template>
  <div>
    <a-cascader
      :default-value="defaultValue"
      :options="options"
      @change="onChange"
    >
      <GoalSelected v-if="mode" :mode="mode" :crate="crate" />
      <UnselectedGoal v-else />
    </a-cascader>
  </div>
</template>

<script>
import common from "~/mixins/common"
import GoalSelected from "./GoalSelected.vue"
import UnselectedGoal from "./UnselectedGoal.vue";

export default {
  mixins: [common],
  computed: {
    trackerMode () {
      return this.tracker.mode
    },
    trackerCrate () {
      return this.tracker[this.tracker.mode]?.crate
    },
    defaultValue () {
      if (!this.tracker.mode || !this.tracker[this.tracker.mode].crate) {
        return []
      }
      return [ this.tracker.mode, this.tracker[this.tracker.mode].crate ]
    },
    options() {
      return ["normal", "hard"]
        .map(mode => {
          const modeLabel = this.$t(`modeSelect.${mode}`);
          const crates = this.conquest[mode].crates;
          const childrens = Object.values(crates)
              .map((crate, index) => ({ value: index + 1, label: `${modeLabel} 0${index + 1} [${crate.keycards}]` }));
          return {
              value: mode,
              label: modeLabel,
              children: childrens
          };
        });
    }
  },
  data: function () {
    return {
      mode: null,
      crate: null
    };
  },
  methods: {
    onChange(value, selectedOptions) {
      const [ mode, crate ] = value
      this.crate = crate
      this.mode = mode

      this.updateTracker({ mode })
      this.updateTracker({ [this.tracker.mode]: { crate } })
    }
  },
  mounted () {
    this.mode = this.trackerMode
    this.crate = this.trackerCrate
  },
  components: { GoalSelected, UnselectedGoal }
}
</script>

<style>

</style>