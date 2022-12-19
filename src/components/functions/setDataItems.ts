import {ref} from "vue";
import type {Item} from "@/types/item";

export const setDataItems = () => {
    const items = ref<Item[]>([
        {
            id: 0,
            image: 'src/components/icons/Item1.svg',
            count: 4
        },
        {
            id: 1,
            image: 'src/components/icons/Item2.svg',
            count: 2
        },
        {
            id: 2,
            image: 'src/components/icons/Item3.svg',
            count: 5
        }
    ])
    for (let i = 3; i < 25; i++) {
        items.value.push({
            id: i,
            image: '',
            count: 0
        })
    }
    return items
}