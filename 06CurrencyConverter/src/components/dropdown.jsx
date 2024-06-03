import React from 'react'
import {HiOutlineStar, HiStar} from "react-icons/hi2";
const Dropdown = ({
    currencies,
    currency,
    setCurrency,
    favorites,
    handleFavorite,
    title="",
}) => {

    
    const isFavorite = (c) => favorites.includes(c)

  return (
    <div>
        <label 
        className='text-white font-medium text-sm block'
        htmlFor={title}>{title}</label>

        <div className='mt-1 relative'>
            <select 
                        onChange={(e) => setCurrency(e.target.value)}
                        value={currency}
                        className='w-full p-2 border border-gray-300 rounded-md shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white'>
                        {favorites.map((currency)=>{
                            return(
                                <option className='bg-white font-medium' value={currency} key={currency}>
                                    {currency} 
                                </option>
                            )
                        })}
                        <hr/>
                    {currencies
                     .filter((c) => !favorites.includes(c))
                     .map((c) => {
                        return (
                            <option key={c} value={c} className='bg-gray-200'>
                                {c}
                            </option>
                        )
                    })}
            </select>
            <button 
                onClick={() => handleFavorite(currency)}
                className='absolute inset-y-0 right-0 pr-5 text-sm flex items-center leading-5'>
                {isFavorite(currency) ? <HiStar /> :<HiOutlineStar />}
                
            </button>
        </div>
    </div>
  )
}

export default Dropdown
