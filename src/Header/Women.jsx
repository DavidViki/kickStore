import React, { useState, useEffect }from "react";
import SneakerCard from "../Components/SneakerCard"; //Importing SneakerCard component
import sneakersData from "../products-women.json"; //Importing all women's data

function Women() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        setSneakers(sneakersData); //Passing women's data to be used in SneakerCard
    }, []);

    return (
        <div className="women-page">
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

export default Women;