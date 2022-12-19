import type {Item} from "@/types/item";

export const moveItem = (arr: Item[], item: Item, old_index: number, new_index: number) => {
    const newItem = arr.find(i => i.id === new_index)!
    if (newItem.image === '')
        return arr.map((arrItem, index) => {
                if (arrItem.id === old_index)
                    return {
                        ...newItem,
                        id: index
                    }
                if (arrItem.id === new_index)
                    return {
                        ...item,
                        id: index
                    }
                return {
                    ...arrItem,
                    id: index
                }
            }
        );
    return arr
};
