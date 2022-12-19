<template>
  <teleport to=".inventory-page">
    <div class="modal">
      <button class="close" @click="emit('hideModal')">
        <img class="cross" src="src/components/icons/CarbonClose.svg" alt="">
      </button>
      <img class="modal-image" :src="image" alt="">
      <div class="line"/>
      <div class="blur title"/>
      <div class="skeleton">
        <div class="blur line"/>
        <div class="blur line"/>
        <div class="blur line"/>
        <div class="blur line-1"/>
        <div class="blur line-2"/>
      </div>
      <div class="line"/>
     <FormData v-if="deleteItem" @hideFormData="deleteItem = false"/>
      <button class="delete" @click="deleteItem = true">
        Удалить предмет
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {ref} from "vue";
import FormData from "@/components/FormData.vue";

defineProps({
  image: String
})

const emit = defineEmits(['hideModal'])

const deleteItem = ref<boolean>(false)
</script>

<style scoped>
.modal {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 250px;
  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid #4D4D4D;
  backdrop-filter: blur(8px);
  border-radius: 0 12px 12px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
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

.modal-image {
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
  object-fit: contain;
}

.skeleton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  overflow: auto;
}

.blur {
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
}

.line {
  width: 220px;
  height: 1px;
  background: #4D4D4D;
}

.title {
  width: 211px;
  height: 26px;
}

.blur.line {
  height: 10px;
  width: 211px;
}

.blur.line-1 {
  height: 10px;
  width: 180px;
}

.blur.line-2 {
  height: 10px;
  width: 80px;
}

.delete{
  background: #FA7272;
  border-radius: 8px;
  padding: 11px 55px;
  border: none;
  outline: none;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
</style>