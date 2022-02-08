<template>
  <div>
    <p>No Mobile</p>
    <Nuxt />
    <!-- <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>
          <header>
            <fragment v-if="isLoggedIn">
              <a-dropdown>
                <div @click="e => e.preventDefault()">
                  <a-avatar
                    v-if="user.photoURL"
                    :src="user.photoURL"
                    size="large"
                    />
                  <a-avatar v-else>{{ user.displayName.charAt(0).toLocaleUpperCase() }}</a-avatar>
                </div>

                <a-menu slot="overlay">
                  <a-menu-item @click="logout">
                    {{ $t('logout') }}
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </fragment>
            <fragment v-else>
              LoginButton
            </fragment>
          </header>
        </a-layout-header>
        <a-layout-content>
          <Nuxt />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout> -->
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
