<script setup>
import Sunset from '..';
import VueMacros from '../../../public/VueMacros.svg';
</script>

<template>
  <div class="sunset-container">

    <!-- 不同尺寸展示 -->
    <div class="sunset-section">
      <div class="sunset-row">
        <Sunset :width="400" :height="400" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sunset-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
}

.sunset-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sunset-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
}
</style>
