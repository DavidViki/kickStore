import React, { useEffect, useState} from "react";
import sneakersData from "../products-kids.json";
import SneakerCard from "../Components/SneakerCard";

function Kids() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        setSneakers(sneakersData);
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