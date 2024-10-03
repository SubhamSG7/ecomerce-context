import { createContext, useContext, useState } from "react";




export const CurrencyContext=createContext();


export const CurrencyContextProvider=({children})=>{
    const [currencyList,setCurrencyList]=useState([]);
    const [selectedCurrency,setSelectedCurrency]=useState("USD")
    return <CurrencyContext.Provider value={{currencyList,setCurrencyList,setSelectedCurrency,selectedCurrency}}>{children}</CurrencyContext.Provider>
}


export function useGlobalCurrency(){
    return useContext(CurrencyContext);
}