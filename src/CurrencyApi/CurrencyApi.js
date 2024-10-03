import axios from "axios";





const apiKey = import.meta.env.VITE_API_KEY
const currencyUrl = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
    params: {
        from: 'USD',
    },
    headers: {
        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'x-rapidapi-key': apiKey
    }
};

export const CurrencyApi = async() => {
    try {
        const currency=await axios.request(currencyUrl);
        return currency?.data?.rates;
    } catch (error) {
        console.log(error);
        
    }
}