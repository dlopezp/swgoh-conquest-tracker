<template>
  <div>
    <v-tour name="newUser" :steps="steps" :options="options" :callbacks="callbacks">
      <template slot-scope="tour">
        <transition name="fade">
          <v-step
            v-if="tour.steps[tour.currentStep]"
            :key="tour.currentStep"
            :step="tour.steps[tour.currentStep]"
            :previous-step="tour.previousStep"
            :next-step="tour.nextStep"
            :stop="tour.stop"
            :skip="tour.skip"
            :is-first="tour.isFirst"
            :is-last="tour.isLast"
            :labels="tour.labels"
          >
            <template slot="header" />
            <template slot="content">
              <component :is="currentStepComponent" :tour="tour" />
            </template>
            <div slot="actions" />
          </v-step>
        </transition>
      </template>
    </v-tour>
    <div v-show="showBackdrop" class="backdrop" />
  </div>
</template>

<script>
import TourNewUserReward from './TourNewUserReward.vue'
import TourNewUserKeycards from './TourNewUserKeycards.vue'
import TourNewUserOpenSector from './TourNewUserOpenSector.vue'
import TourNewUserOpenNodes from './TourNewUserOpenNodes.vue'
import TourNewUserNodes from './TourNewUserNodes.vue'
import TourNewUserOpenZone from './TourNewUserOpenZone.vue'
import TourNewUserFeat from './TourNewUserFeat.vue'

export default {
  components: { TourNewUserReward, TourNewUserKeycards },
  data () {
    return {
      showBackdrop: false,
      element: null,
      currentStep: null,
      callbacks: {
        onStart: this.onStart,
        onPreviousStep: this.onPreviousStep,
        onNextStep: this.onNextStep,
        onSkip: this.onSkip,
        onFinish: this.onFinish,
        onStop: this.onStop
      },
      options: {
        useKeyboardNavigation: false,
        labels: {
          buttonSkip: this.$t('tour.skip'),
          buttonPrevious: this.$t('tour.previous'),
          buttonNext: this.$t('tour.next'),
          buttonStop: this.$t('tour.stop')
        }
      },
      steps: [
        {
          target: '[data-v-step="1"]',
          params: { placement: 'bottom' },
          requireAction: true,
          before: _type => new Promise(
            (resolve, _reject) => {
              // this.showBackdrop = true
              this.showElement('[data-v-step="1"]')
              resolve('foo')
            }
          )
        },
        {
          target: '[data-v-step="2"]',
          params: { placement: 'bottom' },
          requireAction: false,
          before: _type => new Promise(
            (resolve, _reject) => {
              this.showElement('[data-v-step="2"]')
              resolve('foo')
            }
          )
        },
        {
          target: '.ant-collapse-item',
          params: { placement: 'bottom' },
          requireAction: true,
          before: _type => new Promise(
            (resolve, _reject) => {
              this.showElement('.ant-collapse-item')
              resolve('foo')
            }
          )
        },
        {
          target: '.sector-collapse .ant-collapse-item',
          params: { placement: 'bottom' },
          requireAction: true,
          before: _type => new Promise(
            (resolve, _reject) => {
              this.showElement('.sector-collapse .ant-collapse-item')
              resolve('foo')
            }
          )
        },
        {
          target: '.sector-collapse .ant-collapse-content-box',
          params: { placement: 'bottom' },
          requireAction: false,
          before: _type => new Promise(
            (resolve, _reject) => {
              this.showElement('.sector-collapse .ant-collapse-content-box')
              resolve('foo')
            }
          )
        },
        {
          target: '.sector-collapse .ant-collapse-item:nth-child(2)',
          params: { placement: 'bottom' },
          requireAction: true,
          before: _type => new Promise(
            (resolve, _reject) => {
              this.showElement('.sector-collapse .ant-collapse-item:nth-child(2)')
              resolve('foo')
            }
          )
        },
        {
          target: '.ant-list-item',
          params: { placement: 'bottom' },
          requireAction: false,
          before: _type => new Promise(
            (resolve, _reject) => {
              this.showElement('.ant-list-item')
              resolve('foo')
            }
          )
        }
      ]
    }
  },
  computed: {
    currentStepComponent () {
      return [
        TourNewUserReward,
        TourNewUserKeycards,
        TourNewUserOpenSector,
        TourNewUserOpenNodes,
        TourNewUserNodes,
        TourNewUserOpenZone,
        TourNewUserFeat
      ][this.currentStep]
    }
  },
  methods: {
    hideElement () {
      if (this.element) {
        this.element.style.position = ''
        this.element.style.background = ''
        this.element.style.zIndex = ''
        this.element.style.transition = ''
      }
    },
    showElement (selector) {
      this.hideElement()

      this.element = document.querySelector(selector)
      this.element.style.position = 'relative'
      this.element.style.background = 'white'
      this.element.style.zIndex = 1001
      this.element.style.transition = 'all .3s'
    },
    onStart () { this.currentStep = 0 },
    onPreviousStep () { this.currentStep -= 1 },
    onNextStep () { this.currentStep += 1 },
    onSkip () {},
    onFinish () {
      this.hideElement()
      this.$emit('finish')
    },
    onStop () {
      this.hideElement()
      this.$emit('end')
    }
  }
}
</script>

<style>
.backdrop {
  position: fixed;
  background-color: black;
  opacity: .7;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .3s;
  z-index: 10;
}
</style>
