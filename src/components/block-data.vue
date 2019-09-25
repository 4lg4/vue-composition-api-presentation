<template>
  <block>
    <el-switch
            v-model="showUsedData"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Show used data"
    >
    </el-switch>

    <pre v-if="showUsedData">{{ externalData }}</pre>
  </block>
</template>

<script>
import Block from '@/components/block.vue';

export default {
  name: 'block-data',
  components: {Block},
  props: {
    externalData: {
      type: Object,
      default: ()=> ({}),
    }
  },
  data() {
    return {
      showUsedData: false,
      inputValue: 'test',
    };
  },
}
</script>

<style scoped></style>
