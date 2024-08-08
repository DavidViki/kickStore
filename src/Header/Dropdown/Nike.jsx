import React, { useEffect, useState} from "react";
import menData from "../../products-men.json"; //Importing all men's data
import womenData from "../../products-women.json"; // Importing all women's data
import kidsData from "../../products-kids.json"; //Importing all kids data
import SneakerCard from "../../Components/SneakerCard"; //Importing SneakerCard component



function Nike() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const combinedSneakersData = [...menData, ...womenData, ...kidsData]; //Combining all categories into one object
        const sneakersData = combinedSneakersData.filter((sneaker) => sneaker.brand === "Nike") //Filtering combined data for Nike
        setSneakers(sneakersData); //Passing filtered data to be used in SneakerCard
    }, []);

    return (
        <div className="nike-page">
        <h1 className="page-title">Nike kicks</h1>
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

export default Nike;