<template>
  <div>
    Hello {{ bundler }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import aMixin from './services';

export default Vue.extend({
  mixins: [aMixin],
  data() {
    return {
      bundler: 'Parcel',
    };
  },
});
</script>

<style lang="scss" scoped>
  .container {
    color: green;
  }
</style>
