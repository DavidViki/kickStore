import React, { useEffect, useState} from "react";
import sneakersData from "../products-kids.json"; //Importing all kids data
import SneakerCard from "../Components/SneakerCard"; //Importing SneakerCard component

function Kids() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        setSneakers(sneakersData); //Passing kids data to be used in SneakerCard
    }, []);

    return (
        <div className="kids-page">
            <div className="card-container">
            {sneakers.map((sneaker) => (
                <SneakerCard
                key={sneaker.id}
                name={sneaker.name}
                price={sneaker.price}
                image={sneaker.image}
                brand={sneaker.brand}
                />
                ))}
            </div>
        </div>
    )
}

export default Kids;