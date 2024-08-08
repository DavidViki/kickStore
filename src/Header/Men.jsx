import React , { useEffect, useState } from "react";
import SneakerCard from "../Components/SneakerCard"; //importing SneakerCard component
import sneakersData from "../products-men.json"; //importng sneaker data for men's program

function Men() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        setSneakers(sneakersData);
    }, []);

    return (
        <div className="men-page">
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

export default Men;