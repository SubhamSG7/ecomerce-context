import React, { useEffect, useState } from "react";
import { CurrencyApi } from "../CurrencyApi/CurrencyApi";
import { useGlobalCurrency } from "../Context/CurrencyContext";

export default function CurrencyChange() {
  const { setCurrencyList, setSelectedCurrency, selectedCurrency } =
    useGlobalCurrency();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "INR", name: "Indian Rupee" },
  ];

  function handleChange(e) {
    setSelectedCurrency(e.target.value);
  }

  useEffect(() => {
    const fetchCurrencyList = async () => {
      setLoading(true); // Set loading to true when starting to fetch
      try {
        const currency = await CurrencyApi();
        setCurrencyList(currency);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setError("Failed to fetch currency data. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCurrencyList();
  }, []);

  return (
    <div className="flex flex-col mt-2 items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md">
      <label
        htmlFor="currency"
        className="mb-2 text-lg font-serif font-semibold text-white"
      >
        Switch Currency:
      </label>
      {loading ? (
        <p className="text-gray-600">Loading currencies...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <select
          name="currency"
          id="currency"
          value={selectedCurrency}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Currency</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
