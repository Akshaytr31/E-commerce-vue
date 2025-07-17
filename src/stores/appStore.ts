import { defineStore } from 'pinia'
import { ref } from 'vue'
import type cart from '@/types/Cart'

export const useEcommerceStore = defineStore('appStore', () => {
    const cartItems=ref<cart[]>([])

    console.log('cartItems', cartItems);
    
    const setCartItems=(data:cart):void=>{
        cartItems.value?.push(data)
    }
    
    const removeCartItem=(id:number)=>{
        cartItems.value=cartItems.value?.filter((item:cart)=>item.id!==id)
    }
    
    return {setCartItems, removeCartItem, cartItems}
},{
    persist:true,
})