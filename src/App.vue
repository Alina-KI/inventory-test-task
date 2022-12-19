<template>
  <div class="app">
    <div class="inventory">
      <InventoryInfo/>
      <Inventory/>
    </div>
    <div class="footer">
      <div class="line"/>
      <button class="close">
        <img class="cross" src="src/components/icons/CarbonClose.svg" alt="">
      </button>
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

.inventory {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
}

.footer{
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 785px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
}
.line{
  width: 100%;
  height: 36px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 12px;
  margin: 18px 68px 18px 18px;
}
.close{
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 8px;
  right: 8px;
}

.cross{
  width: 24px;
  height: 24px;
}
</style>
