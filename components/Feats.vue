<template>
  <div>
    <div v-for="(feat, index) in feats" :key="feat.id">
      <feat :feat="feat" />
      <vs-divider v-if="index !== feats.length - 1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feats',
  props: { feats: Array }
}
</script>

<style>

</style>