<script setup>
import Sunset from '..';
import VueMacros from '../../../public/VueMacros.svg';
</script>

<template>
  <Sunset :width="200" :height="200" :primary-color="'255, 27, 107'" :secondary-color="'69, 202, 255'" :intensity="0.6"
    :image="VueMacros" />
</template>
