<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <button
    type="button"
    class="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    @click="counter++"
  >
    Count: {{ counter }}
  </button>
</template>
