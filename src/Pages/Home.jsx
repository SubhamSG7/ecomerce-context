import React, { useState } from "react";
import { SimpleSlider } from "../Components/SimpleSlider";
import { useLoaderData } from "react-router-dom";
import ProductWrapper from "../Components/ProductWrapper";
import CurrencyChange from "../Components/CurrencyChange";

export default function Home() {
  
  const fetchedProducts=useLoaderData()
  const [currencyList,setCurrencyList]=useState([])
  return (
    <div className='flex flex-wrap justify-evenly'>
      <SimpleSlider />
      <CurrencyChange/>
      <div className="flex flex-wrap justify-evenly">
      {fetchedProducts?.products.map((val)=>{
        return <ProductWrapper key={val.id} products={val}/>
      })}
      </div>
    </div>
  );
}
