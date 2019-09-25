<template>
  <div class="block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'block',
}
</script>

<style scoped>
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
