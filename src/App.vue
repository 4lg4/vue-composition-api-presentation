<template>
  <div id="app">
    <div>
      <el-switch
              v-model="isFunctional"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="Functional"
              inactive-text="V2"
      >
      </el-switch>
    </div>

    <functional v-if="isFunctional"></functional>
    <V2 v-if="!isFunctional"></V2>
  </div>
</template>

<script>
import Functional from '@/components/functional.vue';
import V2 from '@/components/v2.vue';

export default {
  name: 'app',
  components: { Functional, V2 },
  data() {
    return {
      isFunctional: false,
    };
  },
}
</script>

<style>
* {
  -webkit-overflow-scrolling: touch;
  outline: none;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
