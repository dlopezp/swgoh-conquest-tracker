<template>
  <div v-if="isLoggedIn">
    <a-dropdown>
      <div @click="e => e.preventDefault()">
        <a-avatar
          v-if="user.photoURL"
          :src="user.photoURL"
          size="large"
        />
        <a-avatar v-else>
          {{ user.displayName.charAt(0).toLocaleUpperCase() }}
        </a-avatar>
      </div>

      <a-menu slot="overlay">
        <a-menu-item @click="logout">
          {{ $t('logout') }}
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
  <div v-else>
    LoginButton
  </div>
</template>

<script>
import common from '~/mixins/common'

export default {
  mixins: [common],
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
