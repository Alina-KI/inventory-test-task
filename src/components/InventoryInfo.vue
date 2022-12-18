<template>
  <div class="inventory-info">
    <img src="@/components/icons/ImgBlur.png" alt="Icon">
    <div class="blur title"/>
    <div class="skeleton">
      <div class="blur line-1"/>
      <div class="blur line-2"/>
      <div class="blur line-3"/>
      <div class="blur line-4"/>
      <div class="blur line-5"/>
    </div>
    <div class="blur line-6"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.inventory-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 236px;
  width: 100%;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  padding: 18px 14px;
}

.skeleton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.blur {
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
}

.title {
  width: 190px;
  height: 26px;
}

.line-1 {
  height: 10px;
  width: 155px;
}

.line-2 {
  height: 10px;
  width: 190px;
}

.line-3 {
  height: 10px;
  width: 170px;
}

.line-4 {
  height: 10px;
  width: 160px;
}

.line-5 {
  height: 10px;
  width: 140px;
}

.line-6 {
  height: 10px;
  width: 80px;
}

</style>