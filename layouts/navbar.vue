<template>
  <div>
    <header>
      <fragment v-if="isLoggedIn">
        <vs-dropdown>
          <vs-avatar
            v-if="user.photoURL"
            :src="user.photoURL"
            size="large"
            />
          <vs-avatar
            v-else
            :text="user.displayName.charAt(0).toLocaleUpperCase()"
            size="large"
            />
          <vs-dropdown-menu>
            <vs-dropdown-item @click="logout">
              {{ $t('logout') }}
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </fragment>
      <fragment v-else>
        LoginButton
      </fragment>
    </header>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      user: 'user'
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>