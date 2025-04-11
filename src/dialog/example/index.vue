<template>
  <button @click="showDialog = true">Click me</button>
  
  <Dialog 
    :visible="showDialog" 
    :on-close="() => showDialog = false" 
    width="40%"
    height="50%"
  >
    <div></div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from '..';

const showDialog = ref(false)
</script>
