import React , { useEffect, useState } from "react";
import SneakerCard from "../Components/SneakerCard"; //Importing SneakerCard component
import sneakersData from "../products-men.json"; //Importing all men's data

function Men() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        setSneakers(sneakersData); //Passing men's data to be used in SneakerCard
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