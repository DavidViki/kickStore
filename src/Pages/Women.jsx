import React, { useState, useEffect }from "react";
import SneakerCard from "../Components/SneakerCard";
import sneakersData from "../products-women.json";

function Women() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        setSneakers(sneakersData);
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