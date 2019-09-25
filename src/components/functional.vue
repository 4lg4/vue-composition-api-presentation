<template>
  <div>
    <block>
      <h3>Label component test</h3>

      <input v-model="state.inputValue" />
      <functional-label :title="state.inputValue"></functional-label>
    </block>

    <block>
      <h3>State + Computed</h3>
      <h5>count is {{ state.count }}, the double is ({{ state.double }})</h5>
      <el-button @click="increment">increment</el-button>
    </block>

    <block-data :externalData="$data"></block-data>
  </div>
</template>

<script>
import _increment from '@/lib/increment';
import Block from '@/components/block.vue';
import BlockData from '@/components/block-data.vue';
import FunctionalLabel from '@/components/functional-label.vue';
import initializeState from './functional-state';

export default {
  name: 'functional',
  components: {Block, BlockData, FunctionalLabel},
  setup() {

    const state = initializeState();

    function increment() {
      state.count = _increment(state.count);
    }

    return {
      state,
      increment
    };
  }
}
</script>

<style scoped></style>
