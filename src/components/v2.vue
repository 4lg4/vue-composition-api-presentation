<template>
  <div>
    <block>
      <h3>Label component test</h3>

      <input v-model="inputValue" />
      <my-label :title="inputValue"></my-label>
    </block>

    <block>
      <h3>State + Computed</h3>
      <h5>count is {{ count }}, the double is ({{ double }})</h5>
      <el-button @click="increment">increment</el-button>
    </block>

    <block-data :externalData="$data"></block-data>
  </div>
</template>

<script>
import _increment from '@/lib/increment';
import Block from '@/components/block.vue';
import MyLabel from '@/components/my-label.vue';
import BlockData from '@/components/block-data.vue';

export default {
  name: 'V2',
  components: {Block, BlockData, MyLabel},
  data() {
    return {
      inputValue: 'test',
      count: 0,
    };
  },
  computed: {
    double() {
      return this.count * 2;
    }
  },
  methods: {
    increment() {
      this.count = _increment(this.count);
    }
  }
}
</script>

<style scoped></style>
