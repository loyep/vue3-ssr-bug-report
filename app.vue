<template>
  <div :class="color">
    {{ color }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

console.log(process.client);

const color = computed(() => {
  return process.client ? "black" : "red";
});
</script>

<style>
.red {
  color: red;
}
.black {
  color: black;
}
</style>
