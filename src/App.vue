<template>
  <div id="app">
    <h1>Reactivity</h1>

    <div class="block">
      <h3>Vanilla HTML</h3>

      <input v-model="inputValue" />
      <h4>{{ inputValue }}</h4>
    </div>

    <div class="block">
      <h3>Element UI components</h3>

      <el-input v-model="inputValue"></el-input> <br><br>
      <el-tag>{{ inputValue }}</el-tag>
    </div>

    <div class="block">
      <el-switch
        v-model="showUsedData"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Show used data"
      >
      </el-switch>

      <pre v-if="showUsedData">{{ $data }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showUsedData: false,
      inputValue: 'test',
    };
  },
}
</script>

<style scoped>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.block {
  border-radius: 4px;
  margin: 50px;
  padding: 30px;
  background-color: #f5f5f5;
}

.block pre {
  text-align: left;
}
</style>
