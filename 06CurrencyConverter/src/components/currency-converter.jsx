import React, { useEffect, useState } from 'react'
import Dropdown from './dropdown';
import { HiArrowsRightLeft } from 'react-icons/hi2';

function CurrencyConverter() {
    const[currencies,setCurrencies] = useState([]);
    const [amount,setAmount] = useState(1);
    const [fromcurrency,setFromCurrency] = useState("USD")
    const [tocurrency,setToCurrency] = useState("INR")
    const [convertedamount,setConvertedAmount] = useState(null)
    const [converting,setConverting] = useState(false)
    const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || ["INR","EUR"])


    // https://api.frankfurter.app/currencies
    const fetchcurrencies =async ()=>{
        try{
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();
            setCurrencies(Object.keys(data))
        }
        catch(error){
            console.log("error fetching",error);
        }
    };

    useEffect(()=>{
        fetchcurrencies();
    },[currencies])

    
    const swapCurrencies = () =>{
        setFromCurrency(tocurrency);
        setToCurrency(fromcurrency);
    }


   // https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
   const currenciesConvert =async () =>{
    if(!amount) return
    setConverting(true);
    try{
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromcurrency}&to=${tocurrency}`);
        const data = await res.json();
        setConvertedAmount(data.rates[tocurrency] + " " + tocurrency)
    }
    catch(error){
        console.log("error fetching",error);
    }
    finally{
        setConverting(false);
    }
   }


   const handleFavorite = (c) =>{
    let updatedFavorites = [...favorites];
    if(favorites.includes(c)){
        updatedFavorites = updatedFavorites.filter((fav) => fav!==c);
    }
    else {
        updatedFavorites.push(c);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites",JSON.stringify(updatedFavorites));
    }

  return (
    <>
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
        Currency Converter
        </h2>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-end'>
                <Dropdown currencies={currencies} 
                          title='From :' 
                          handleFavorite={handleFavorite} 
                          currency={fromcurrency}
                          setCurrency={setFromCurrency}
                          favorites={favorites}
                />
                <div className='flex justify-center -mb-5 sm:mb-0'>
                    <button 
                        onClick={swapCurrencies}
                        className='bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300'>
                        <HiArrowsRightLeft className='text-2xl text-gray-700' />
                    </button>
                </div>
                <Dropdown currencies={currencies} 
                          title='To :' 
                          handleFavorite={handleFavorite} 
                          currency={tocurrency}
                          setCurrency={setToCurrency}
                          favorites={favorites}  
                />
            </div>

            <div className="mt-6">
                <label htmlFor='amount'
                    className='block text-sm font-medium text-gray-700'>
                    Amount:
                </label>
                <input type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className='w-full p-2 border border-gray-400 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-1' 
                />
            </div>

            <div className='flex justify-end mt-6'>
                <button 
                onClick={currenciesConvert}
                className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                ${converting ? "animate-pulse" : " "}`}>
                Convert
                </button>
            </div>

            {convertedamount && (<div className='mt-4 text-lg font-medium text-green-600 text-center'>
                Converted Amount : {convertedamount} 
            </div>)}

    </div>
    
    </>
  )
}

export default CurrencyConverter
