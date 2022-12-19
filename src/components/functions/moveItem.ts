import type {Item} from "@/types/item";

export const moveItem = (arr: Item[], item: Item, old_index: number, new_index: number) => {
    const newItem = arr.find(i => i.id === new_index)!
    return arr.map((arrItem) => {
            if (arrItem.id === old_index)
                return newItem
            if (arrItem.id === new_index)
                return item
            return arrItem
        }
    );
};
