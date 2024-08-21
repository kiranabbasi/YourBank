import React, { useState, useEffect, useCallback } from 'react';
import PAKflag from '../../assets/pak.png';
import USDflag from '../../assets/usd.png';
import EUROflag from '../../assets/euro.png';
import GBPflag from '../../assets/gbp.png';
import Downarrow from '../../assets/downarrow.svg';

const currencyOptions = [
    { code: 'USD', name: 'United States Dollar', flag: USDflag },
    { code: 'PKR', name: 'Pak Rupees', flag: PAKflag },
    { code: 'EUR', name: 'Euro', flag: EUROflag },
    { code: 'GBP', name: 'British Pound', flag: GBPflag }
];

const CURRENCY_API_URL = 'https://v6.exchangerate-api.com/v6/4e02024c60fa109a0d589f47/latest/USD';
const CACHE_EXPIRY = 86400000; // 24 hours in milliseconds

const CurrencyExchange = () => {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('PKR');
    const [amount, setAmount] = useState('30'); // Initialize amount to 30 USD
    const [result, setResult] = useState('');
    
    const convertCurrency = useCallback(async (amount, fromCurrency, toCurrency) => {
        const now = Date.now();
        const cachedData = JSON.parse(localStorage.getItem('currencyData'));
        const cacheTimestamp = localStorage.getItem('cacheTimestamp');

        if (cachedData && cacheTimestamp && (now - cacheTimestamp < CACHE_EXPIRY)) {
            // Use cached data
            if (cachedData[fromCurrency] && cachedData[toCurrency]) {
                let fromRate = cachedData[fromCurrency];
                let toRate = cachedData[toCurrency];
                return (amount / fromRate) * toRate;
            } else {
                console.error('Currency not found in cached data');
                return null;
            }
        }

        try {
            let response = await fetch(CURRENCY_API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            if (data && data.conversion_rates) {
                localStorage.setItem('currencyData', JSON.stringify(data.conversion_rates));
                localStorage.setItem('cacheTimestamp', now.toString());

                let fromRate = data.conversion_rates[fromCurrency];
                let toRate = data.conversion_rates[toCurrency];

                if (fromRate && toRate) {
                    return (amount / fromRate) * toRate;
                } else {
                    console.error('Currency not found in API response');
                    return null;
                }
            } else {
                console.error('Unexpected API response structure');
                return null;
            }
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
            return null;
        }
    }, []);

    const handleExchange = useCallback(async () => {
        const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
        setResult(convertedAmount);
    }, [amount, fromCurrency, toCurrency, convertCurrency]);

    useEffect(() => {
        if (amount) {
            handleExchange();
        }
    }, [fromCurrency, toCurrency, amount, handleExchange]);

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    return (
        <div>
            <div className='border border-zinc-700 rounded-lg md:mx-4'>
                <div className='flex'>
                    <div className='border border-zinc-800 p-2 relative w-full'>
                        <button
                            className='ml-2 focus:outline-none'
                            onClick={() => document.getElementById('fromCurrencySelect').classList.toggle('hidden')}
                        >
                            <div className='flex gap-3 items-center'>
                                <img className="w-7 h-7" src={currencyOptions.find(currency => currency.code === fromCurrency).flag} alt="flagicon" />
                                <p className='text-xs'>{fromCurrency}</p>
                                <img src={Downarrow} alt="selecticon" />
                            </div>
                            <div className='text-xs font-thin py-2 text-left'>{currencyOptions.find(currency => currency.code === fromCurrency).name}</div>
                        </button>
                        <select
                            id="fromCurrencySelect"
                            className='absolute inset-0 opacity-0 cursor-pointer hidden bg-zinc-700'
                            value={fromCurrency}
                            onChange={handleFromCurrencyChange}
                        >
                            {currencyOptions.map(currency => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='border border-zinc-800 p-2 relative w-full'>
                        <button
                            className='ml-2 focus:outline-none w-full'
                            onClick={() => document.getElementById('toCurrencySelect').classList.toggle('hidden')}
                        >
                            <div className='flex gap-3 items-center'>
                                <img className="w-7 h-7" src={currencyOptions.find(currency => currency.code === toCurrency).flag} alt="flagicon" />
                                <p className='text-xs'>{toCurrency}</p>
                                <img src={Downarrow} alt="selecticon" />
                            </div>
                            <div className='text-xs font-thin py-2 text-left'>{currencyOptions.find(currency => currency.code === toCurrency).name}</div>
                        </button>
                        <select
                            id="toCurrencySelect"
                            className='absolute inset-0 opacity-0 cursor-pointer hidden bg-zinc-700'
                            value={toCurrency}
                            onChange={handleToCurrencyChange}
                        >
                            {currencyOptions.map(currency => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex mx-4 gap-2'>
                    <div>
                        <input
                            className='bg-inherit w-full h-12 text-zinc-300'
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='bg-inherit w-full h-12 text-zinc-300'
                            value={result ? result.toFixed(2) : ''}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <button className='bg-primary text-secondary w-11/12 m-4 py-2 rounded-full text-xs font-light' onClick={handleExchange}>
                Exchange
            </button>
        </div>
    );
};

export default CurrencyExchange;
