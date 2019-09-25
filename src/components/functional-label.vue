<template>
  <div class="label">
    {{ state.title }}
  </div>
</template>

<script>
import {reactive, computed} from '@vue/composition-api';

export default {
  name: 'functional-label',
  props: {
    title: String,
  },
  setup(initProps) {
    const state = reactive({
      title: computed(()=> `${initProps.title} *****`),
    });

    return {
      state,
    };
  }
}
</script>

<style scoped>
.label {
  font-weight: bold;
}
</style>
