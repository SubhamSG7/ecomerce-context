import { createContext, useContext, useState } from "react";

const apiKey=import.meta.env.VITE_API_KEY;
export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const [cart,setCart]=useState([])
    function AddToCart(product){
        setCart((prev)=>[...prev,{...product,quantity:1}])
    }
    function updateCart(id,value){
        setCart((prev)=>prev.map((product)=>product.id===id?{...product,quantity:product.quantity+value}:product
        ))
    }
    function removeFromCart(id){
        setCart((prev)=>prev.filter(product=>product.id!==id))
    }
    return <CartContext.Provider value={{cart,setCart,AddToCart,updateCart,removeFromCart}}>{children}</CartContext.Provider>
}


export const useGlobalCart=()=>{
    return useContext(CartContext)
}