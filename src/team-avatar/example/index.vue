<script setup>
import TeamAvatar from '..'
import VueMacros from '../../../public/VueMacros.svg'
import VueDevtools from '../../../public/VueDevtools.svg'
import iKunUi from '../../../public/iKunUi.png'
</script>

<template>
  <div class="team-avatar-container">
    <!-- GitHub Mode -->
    <!-- <TeamAvatar :width="400" :height="400" repo="vuejs/core" /> -->

    <!-- Group Display -->
    <TeamAvatar :width="400" :height="400" repo="vue-macros/vue-macros" group="vue-tools" />
    <TeamAvatar :width="400" :height="400" :logo="VueDevtools" repo="vuejs/devtools" />
  </div>
</template>

<style scoped>
.team-avatar-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 2rem;
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
