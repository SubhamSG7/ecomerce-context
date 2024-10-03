import React, { useEffect,useState } from 'react'
import { CurrencyApi } from '../CurrencyApi/CurrencyApi';
import { useGlobalCurrency } from '../Context/CurrencyContext';


export default function CurrencyChange() {
    const {setCurrencyList,setSelectedCurrency,selectedCurrency}=useGlobalCurrency()
    
    const currencies = [
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' },
        { code: 'JPY', name: 'Japanese Yen' },
        { code: 'INR', name: 'Indian Rupee' }, 
    ];
    function handleChange(e){
        setSelectedCurrency(e.target.value);
        
    }
    useEffect(()=>{
        const fetchCurrencyList = async () => {
            try {
                const currency = await CurrencyApi();
                setCurrencyList(currency); 
                
                
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchCurrencyList(); 
    },[])    
  return (
    <div>
    <label htmlFor="currency">Switch Currency:</label>
    <select
        name="currency"
        id="currency"
        value={selectedCurrency}
        onChange={handleChange}
    >
        {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
                {currency.name}
            </option>
        ))}
    </select>
</div>
  )
}
