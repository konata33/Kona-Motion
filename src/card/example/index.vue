<script setup>
import Card from '..';

</script>

<template>

  <div class="card-container">
    <Card title="CREATOR" name="三咲智子" icon="https://avatars.githubusercontent.com/u/6481596?v=4" />
    <Card title="CREATOR" name="Innei" icon="https://avatars.githubusercontent.com/u/41265413?v=4" />
    <Card title="CREATOR" name="Arlo" icon="https://avatars.githubusercontent.com/u/22515951?v=4" />
    <Card title="CREATOR" name="白雾三语" icon="https://avatars.githubusercontent.com/u/32354856?v=4" />
    <Card title="CREATOR" name="Doctor Wu" icon="https://avatars.githubusercontent.com/u/44631608?v=4" />
    <Card title="CREATOR" name="Simon He" icon="https://avatars.githubusercontent.com/u/57086651?v=4" />
    <Card title="CREATOR" name="Alex" icon="https://avatars.githubusercontent.com/u/49969959?v=4" />
    <Card title="CREATOR" name="Herrington Darkholme" icon="https://avatars.githubusercontent.com/u/2883231?v=4" />
    <Card title="CREATOR" name="Isolcat" icon="https://avatars.githubusercontent.com/u/76111612?v=4" />
    <Card title="CREATOR" name="沈青川" icon="https://avatars.githubusercontent.com/u/46062972?v=4" />
    <Card title="CREATOR" name="Xiaomo" icon="https://avatars.githubusercontent.com/u/43628500?v=4" />
    <Card title="CREATOR" name="Zhiyuanzmj" icon="https://avatars.githubusercontent.com/u/32807958?v=4" />
  </div>


</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  justify-content: flex-start;
}

.card-container> :deep(*) {
  flex: 0 0 calc(25% - 1.5rem);
  /* 四列布局，考虑间距 */
  min-width: 200px;
  /* 设置最小宽度 */
  margin-bottom: 2rem;
  /* 行间距 */
}
</style>
