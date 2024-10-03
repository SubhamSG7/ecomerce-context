import React, { useEffect, useState } from 'react';
import { useGlobalCart } from '../Context/CartContext';
import { useGlobalCurrency } from '../Context/CurrencyContext';

export default function ProductWrapper({ products }) {
    const { cart, AddToCart, updateCart, removeFromCart } = useGlobalCart();
    const [quantity, setQuantity] = useState(0);
    const { image, brand, category, color, description, price } = products;
    const {currencyList,selectedCurrency}=useGlobalCurrency()
    
    function wrapDescription(text) {
        return text.split(" ").slice(0, 10).join(" ") + (text.split(" ").length > 10 ? '...' : '');
    }
    function handleCurrency(){
        if(selectedCurrency!=="USD"){
            return `${selectedCurrency} ${Math.floor(currencyList[selectedCurrency]*price)}`;
            
        }
        return `$ ${price}`
    }
    useEffect(() => {
        const itemInCart = cart.find((item) => item.id === products.id);
        setQuantity(itemInCart ? itemInCart.quantity : 0);
    }, [cart, products.id]);

    return (
        <div className='border border-gray-300 m-4 w-[20%] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center'>
            <img src={image} alt="Product" className='h-36 rounded-2xl object-cover mb-2' />
            <p className='text-gray-800 font-bold text-xl'>{brand}</p>
            <p className='text-gray-600'>{category}</p>
            <p className='text-gray-700 text-center'>{wrapDescription(description)}</p>
            <div className='text-gray-500'>{color}</div>
            <p className='text-lg font-semibold text-gray-900'>{handleCurrency(price)}</p>
            {quantity === 0 ? (
                <button 
                    className='mt-2 bg-brown-600 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200'
                    onClick={() => AddToCart(products)}>
                    Add To Cart
                </button>
            ) : (
                <div className='flex items-center flex-wrap mt-2 gap-2'>
                    <button 
                        className='bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400 transition duration-200'
                        onClick={() => updateCart(products.id, +1)}>+</button>
                    <p className='mx-2'>Quantity: {quantity}</p>
                    <button 
                        className='bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400 transition duration-200' 
                        disabled={quantity === 1} 
                        onClick={() => updateCart(products.id, -1)}>-</button>
                    <button 
                        className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200 ml-2'
                        onClick={() => removeFromCart(products.id)}>Delete</button>
                </div>
            )}
        </div>
    );
}
