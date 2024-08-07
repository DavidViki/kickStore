import React, { useEffect, useState} from "react";
import menData from "../products-men.json";
import womenData from "../products-women.json";
import kidsData from "../products-kids.json";
import SneakerCard from "../Components/SneakerCard";



function Adidas() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const combinedSneakersData = [...menData, ...womenData, ...kidsData];
        const sneakersData = combinedSneakersData.filter((sneaker) => sneaker.brand === "Adidas")
        setSneakers(sneakersData);
    }, []);

    return (
        <div className="adidas-page">
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

export default Adidas;