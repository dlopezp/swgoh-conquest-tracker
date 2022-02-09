<template>
  <fragment>
    <SelectGoal data-v-step="1" />
    <KeycardStatus data-v-step="2" />
    <Conquest />

    <Tour @end="onTourEnd" @finish="onTourFinish" />

    <a-modal
      :title="$t('modal.welcome.title')"
      :visible="showWelcomeModal"
      :ok-text="$t('modal.welcome.ok')"
      :cancel-text="$t('modal.welcome.cancel')"
      :mask-closable="false"
      @ok="onWelcomeModalOk"
      @cancel="onWelcomeModalCancel"
    >
      <p>{{ $t('modal.welcome.first') }}</p>
      <p>{{ $t('modal.welcome.second') }}</p>
    </a-modal>
  </fragment>
</template>

<script setup>
import { mapGetters } from 'vuex'
import KeycardStatus from '~/components/KeycardStatus.vue'
import SelectGoal from '~/components/SelectGoal.vue'
import Conquest from '~/components/Conquest.vue'
import Tour from '~/components/Tour.vue'

export default {
  components: { KeycardStatus, SelectGoal, Conquest, Tour },
  // layout: (ctx) => ctx.$device.isMobile ? 'mobiletracker' : 'tracker',
  layout: 'mobiletracker',
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tracker: 'getTracker',
      conquest: 'conquest',
      isNewUser: 'isNewUser'
    })
  },
  data () {
    return {
      showWelcomeModal: false,
      sectors: ['sector1', 'sector2', 'sector3', 'sector4', 'sector5']
    }
  },
  mounted () {
    if (this.isNewUser) {
      this.showWelcome()
    }
  },
  methods: {
    onWelcomeModalOk () {
      document.querySelector('.ant-modal-content').style.display = 'none'
      this.initTour()
    },
    onWelcomeModalCancel () {
      this.showWelcomeModal = false
    },
    showWelcome () {
      this.showWelcomeModal = true
    },
    initTour () {
      this.$tours.newUser.start()
    },
    onTourEnd () {
      this.showWelcomeModal = false
    },
    onTourFinish () {
      this.showWelcomeModal = false
      const h = this.$createElement
      const content = this.$t('modal.tour.content')
      this.$success({
        title: this.$t('modal.tour.title'),
        content: h('div', {}, [
          h('p', content)
        ]),
        onOk () {}
      })
    }
  }
}
</script>

<style>
</style>
