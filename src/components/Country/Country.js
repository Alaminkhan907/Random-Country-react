import React from 'react';
import './Country.css'

const Country = (props) => {
    //console.log(props);
    // object destructuring
    const {name ,population,region,flag}= props.country;
    const handleAddCountry =props.handleAddCountry;
    
    return (
        <div className="country">
            <h4>This is {name} </h4>
            <img style={{height:'150px'}} src={flag} alt=""/>
            <p>Population :{population}</p>
            <p><small>Region : {region} </small></p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;