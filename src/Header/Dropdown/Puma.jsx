import React, { useEffect, useState} from "react";
import menData from "../../products-men.json"; //Importing all men data
import womenData from "../../products-women.json"; //Importing all women data
import kidsData from "../../products-kids.json"; //Importing all kids data
import SneakerCard from "../../Components/SneakerCard"; //Importing SneakerCard component



function Puma() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const combinedSneakersData = [...menData, ...womenData, ...kidsData]; //Combining all data into one object
        const sneakersData = combinedSneakersData.filter((sneaker) => sneaker.brand === "Puma") //Filtering combined data for Puma sneakers
        setSneakers(sneakersData); //Passing filtered data to be used in SneakerCard
    }, []);

    return (
        <div className="puma-page">
        <h1 className="page-title">Puma kicks</h1>
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

export default Puma;