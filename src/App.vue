<template>
  <div>
    Parcel - Vue {{ bundler }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import aMixin from './services';

export default Vue.extend({
  mixins: [aMixin],
  data() {
    return {
      bundler: 'Boilerplate',
    };
  },
});
</script>

<style lang="scss" scoped>
  .container {
    color: green;
  }
</style>
