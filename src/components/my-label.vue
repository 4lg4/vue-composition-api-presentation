<template>
  <div class="label">
    {{ localTitle }}
  </div>
</template>

<script>
export default {
  name: 'my-label',
  props: {
    title: String,
  },
  computed: {
    localTitle() {
      return `${this.title} *****`;
    },
  },
};
</script>

<style scoped>
.label {
  font-weight: bold;
}
</style>
