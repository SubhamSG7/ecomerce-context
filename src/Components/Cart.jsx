import React, { useEffect, useState } from 'react';
import { useGlobalCart } from '../Context/CartContext';
import ProductWrapper from './ProductWrapper';
import CurrencyChange from './CurrencyChange';
import { useGlobalCurrency } from '../Context/CurrencyContext';
import CartEmpty from './CartEmpty';

export default function Cart() {
    const { cart } = useGlobalCart();
    const [total, setTotal] = useState(0);
    const { currencyList, selectedCurrency } = useGlobalCurrency();

    function handleCurrency(price) {
        if (selectedCurrency !== "USD") {
            return `${selectedCurrency} ${Math.floor(currencyList[selectedCurrency] * price)}`;
        }
        return `$ ${price}`;
    }

    useEffect(() => {
        const totalPrice = cart.reduce((acc, val) => acc + val.price, 0);
        setTotal(totalPrice);
    }, [cart]);

    return (
        <div className="container mx-auto p-4">
            <CurrencyChange />
            <div className='flex flex-wrap justify-evenly mt-4'>
                {cart.length === 0 ? (
                    <CartEmpty />
                ) : (
                    <div className='flex flex-wrap justify-evenly'>
                        {cart.map((val) => (
                            <ProductWrapper key={val.id} products={val} />
                        ))}
                    </div>
                )}
            </div>
            {total > 0 && (
                <div className='mt-4 text-xl font-semibold'>
                    Total Amount: {handleCurrency(total)}
                </div>
            )}
        </div>
    );
}
