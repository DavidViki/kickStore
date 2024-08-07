import React from "react";

function SneakerCard({id, name, price, image, brand}) {
    return(
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h3 className="sneaker-name">{`${brand} ${name}`}</h3>
                <p className="card-price">{price}</p>
            </div>
        </div>
    )
}

export default SneakerCard;