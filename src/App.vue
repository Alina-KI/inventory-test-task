<template>
  <div class="app">
    <div class="inventory">
      <InventoryInfo/>
      <Inventory/>
    </div>

  </div>
</template>

<script lang="ts">
import InventoryInfo from "@/components/InventoryInfo.vue";
import Inventory from "@/components/Inventory.vue";

export default {
  components: {Inventory, InventoryInfo}
}
</script>

<style scoped>
.app {
  background: #262626;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  cursor: url("src/components/icons/default-cursor.svg"), auto;
}
.inventory{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  height: 100%;
}
</style>
