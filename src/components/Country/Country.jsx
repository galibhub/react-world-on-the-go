import React, { useState } from 'react';
import './country.css';

const Country = ({ country,handleVisitedCountries }) => {
    // console.log(country.name.common);


    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        
        //== way-1
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }

        //==way-2
        // setVisited(visited ? false : true)

        //==way-3
        setVisited(!visited ? true : false);
        handleVisitedCountries(country);


    }


    return (
        // <div className='country' >  for handelling dynamically visitated country
        <div className={`country ${visited && 'country-visited'}`}>  
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{
                visited ? "Visited" : "Not Visited"
            }</button>
        </div>
    );
};

export default Country;