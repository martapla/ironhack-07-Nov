import { defineStore } from 'pinia';

export const usePiniaStore = defineStore('tasks', {
    state: () => ({
        brand: 'Nike',
        price: 500
    }),
    actions: {
        changeBrand(newBrand) {
            return this.brand = newBrand;
        }
    }
});