import React from 'react';
import './Countries.css'

const Country = (props) => {
    const {area, region, name,flags} = props.country;

    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt=""/>
            <p>Area: {area}</p>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;