<template>
  <div class="inventory-page" ref="mapRef">
    <div class="item" v-for="item in items" ref="itemRef" :key="item.id"
         @mousedown="mousedown($event, item)" @click="showModal = true">
      <img v-if="item.image !== ''" class="image" :src="item.image" alt="">
      <div v-if="item.count > 0" class="count-block">
        <span class="count">{{ item.count }}</span>
      </div>
    </div>
    <div class="active-item" ref="activeItemRef">
      <img :src="activeItem.item.image" alt="">
    </div>
    <ModalInfo v-if="showModal" :image="activeItem.item.image"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {Item} from "@/types/item";
import type {ActiveItem} from "@/types/activeItem";
import {moveItem} from "@/components/functions/moveItem";
import {setDataItems} from "@/components/functions/setDataItems";
import ModalInfo from "@/components/ModalInfo.vue";

const showModal = ref<boolean>(false)
const items = !!localStorage.getItem('items')
    ? ref<Item[]>(JSON.parse(localStorage.getItem('items')!))
    : setDataItems()

const activeItem = ref<ActiveItem>({
  item: {
    id: 0,
    image: '',
    count: 0
  },
  isActive: false
})

const mapRef = ref<HTMLDivElement | null>(null)
const itemRef = ref<HTMLDivElement | null>(null)
const activeItemRef = ref<HTMLDivElement | null>(null)

const mousedown = (e: MouseEvent, item: Item) => {
  if (item.image !== '') {
    activeItemRef.value!.style.top = 50 * ((item.id / 5) > 1 ? (item.id / 5) : 0) + 'px'
    activeItemRef.value!.style.left = 100 * item.id + 'px'

    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)

    let id: number = 0

    activeItem.value = {
      item: item,
      isActive: false
    }

    function mousemove(e: MouseEvent) {
      activeItemRef.value!.style.display = 'flex'
      const left = Number.parseFloat(activeItemRef.value!.style.left)
      const top = Number.parseFloat(activeItemRef.value!.style.top)
      const prevX = e.clientX
      const prevY = e.clientY

      const rect = mapRef.value!.getBoundingClientRect()
      activeItemRef.value!.style.left = prevX - rect.left - 50 + 'px'
      activeItemRef.value!.style.top = prevY - rect.top - 50 + 'px'
      id = Math.round((Math.abs(left) / 100) + 5 * (Math.abs(top) / 100))
    }

    function mouseup() {
      activeItem.value.isActive = false
      activeItemRef.value!.style.display = 'none'
      items.value = moveItem(items.value, item, item.id, id)
      localStorage.setItem('items', JSON.stringify(items.value))
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mouseup', mouseup)
    }
  }
}

</script>

<style scoped>
.inventory-page {
  background: #4D4D4D;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1px;
  position: relative;
}

.item {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #262626;
}

.item:active {
  cursor: url("src/components/icons/drag-cursor.svg"), auto;
}

.item:nth-child(1) {
  border-radius: 12px 0 0 0;
}

.item:nth-child(5) {
  border-radius: 0 12px 0 0;
}

.item:nth-child(21) {
  border-radius: 0 0 0 12px;
}

.item:nth-child(25) {
  border-radius: 0 0 12px 0;
}

.image{
  width: 54px;
  height: 54px;
}

.active-item {
  position: absolute;
  display: none;
  cursor: url("src/components/icons/drag-cursor.svg"), auto;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 24px;
  width: 100px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.count {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #FFFFFF;
}

.count-block {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 6px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  width: 16px;
  height: 16px;
}
</style>