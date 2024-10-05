import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductWrapper from "./ProductWrapper";
import CurrencyChange from "./CurrencyChange";

export default function Products() {
  const fetchedProducts = useLoaderData();
  return (
    <div className="flex flex-wrap justify-evenly">
      <CurrencyChange />
      <div className="flex flex-wrap justify-evenly gap-2 ">
        {fetchedProducts?.products.map((val) => {
          return <ProductWrapper key={val.id} products={val} />;
        })}
      </div>
    </div>
  );
}
