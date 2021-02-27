import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,population,region,flag} = props.country
    const countryStyle = {  border: '1px solid skyblue',margin:'10px',padding: '10px'}
    const handleAddCountry =props.handleAddCountry
    return (
        <div style={countryStyle}>
            <h4>The Country Name is :-{name}</h4>
            <img src={flag} alt=""/>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <button onClick={()=> handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;