import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))

    }, [])
    return (
        <div>
            <h1>visiting country!!</h1>
            <h3>country: {countries.length}</h3>
            <div className='countries-container'>
            {
                // country.map(countries => <Country name={countries.name.common} population={countries.population}></Country>)
                countries.map(country => <Country 
                    country={country}
                    key={country.cca3}
                    ></Country>)
            }
            </div>
        </div>
    );
};



export default Countries;