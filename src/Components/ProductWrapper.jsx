import React, { useEffect, useState } from "react";
import { useGlobalCart } from "../Context/CartContext";
import { useGlobalCurrency } from "../Context/CurrencyContext";

export default function ProductWrapper({ products }) {
  const { cart, AddToCart, updateCart, removeFromCart } = useGlobalCart();
  const [quantity, setQuantity] = useState(0);
  const { image, brand, category, color, description, price } = products;
  const { currencyList, selectedCurrency } = useGlobalCurrency();

  function wrapDescription(text) {
    return (
      text.split(" ").slice(0, 10).join(" ") +
      (text.split(" ").length > 10 ? "..." : "")
    );
  }

  function handleCurrency() {
    if (selectedCurrency !== "USD") {
      return `${selectedCurrency} ${Math.floor(
        currencyList[selectedCurrency] * price
      )}`;
    }
    return `$ ${price}`;
  }

  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === products.id);
    setQuantity(itemInCart ? itemInCart.quantity : 0);
  }, [cart, products.id]);

  return (
    <div
      className="border border-gray-300 m-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] flex flex-col  flex-wrap p-4 rounded-lg shadow-lg bg-teal-600 items-center cursor-pointer transition-all duration-300 hover:shadow-xl"
      style={{ boxShadow: "8px 11px 14px 7px black" }}
    >
      <img
        src={image}
        alt="Product"
        className="w-full h-36 sm:h-48 md:h-56 lg:h-64 rounded-2xl object-cover mb-2"
      />
      <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
        Brand: {brand}
      </p>
      <p className="text-gray-600 text-sm sm:text-base">
        {" "}
        Category: {category}
      </p>
      <p className="text-gray-700 text-center text-xs sm:text-sm md:text-base">
        {wrapDescription(description)}
      </p>
      <div className="text-gray-500 text-xs sm:text-sm">{color}</div>
      <p className="text-lg font-semibold text-gray-900 mt-2">
        Price: {handleCurrency(price)}
      </p>

      {quantity === 0 ? (
        <button
          className="mt-2 bg-brown-500 text-white py-1 px-3 rounded hover:bg-orange-400 transition duration-200"
          onClick={() => AddToCart(products)}
        >
          Add To Cart
        </button>
      ) : (
        <div className="flex items-center flex-wrap mt-2 gap-2">
          <button
            className="bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400 transition duration-200"
            onClick={() => updateCart(products.id, +1)}
          >
            +
          </button>
          <p className="mx-2 text-sm sm:text-base">Quantity: {quantity}</p>
          <button
            className="bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400 transition duration-200"
            disabled={quantity === 1}
            onClick={() => updateCart(products.id, -1)}
          >
            -
          </button>
          <button
            className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200 ml-2"
            onClick={() => removeFromCart(products.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
