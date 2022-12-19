<template>
  <form class="data" >
    <input class="input" placeholder="Введите количество">
    <div class="button-block">
      <button class="cancel" @click="emit('hideFormData')">Отмена</button>
      <button class="delete" @click="emit('hideFormData')">Подтвердить</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['hideFormData'])
</script>

<style scoped>
.data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: rgba(38, 38, 38, 0.5);
  border-top: 1px solid #4D4D4D;
  backdrop-filter: blur(8px);
  border-radius: 0 0 12px 0;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.button-block {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.input {
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  padding: 11px 12px;
  outline: none;
}

.delete {
  background: #FA7272;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  padding: 10px 15px;
  cursor: url("src/components/icons/default-cursor.svg"), auto;
}

.cancel {
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 10px 20px;
  gap: 12px;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2D2D2D;
  cursor: url("src/components/icons/default-cursor.svg"), auto;
}
</style>