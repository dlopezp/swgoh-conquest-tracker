<template>
  <a-layout>
    <a-layout-header style="padding: 0 20px;">
      <a-row>
        <a-col :span="12" style="text-align: left;">
          Logo
        </a-col>
        <a-col :span="12" style="text-align: right;">
          <UserAvatar />
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <Nuxt />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
import UserAvatar from '~/components/UserAvatar.vue'

export default {
  components: { UserAvatar }
}
</script>

<style>

</style>
