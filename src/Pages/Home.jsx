import React from "react";
import Slider from "../Components/Slider";
import sliderdata from "../sliderdata.json";
import MapPin from "../Components/MapPin";

function Home() {
    return (
        <div style={{backgroundColor: "black", color: "#f0f0f0", minHeight: "100vh", padding: "20px", margin: "0 auto",}}>
            <div style={{margin: "20px 0"}}>
                <h2 style={{fontSize: "2rem", fontWeight: "bold", color: "#ffffff", marginBottom: "20px", display: "flex", justifyContent: "center"}}>🔥Hottest Releases🔥</h2>
                <Slider slides={sliderdata} />
            </div>
             
            <div style={{padding: '20px', margin: '0 auto'}}    >
            <h2 style={{display: "flex", justifyContent:"center", marginBottom: "20px", color: "#ffffff", fontWeight: "bold", fontSize: "2rem"}}>🎉New Store Opening!</h2>
                <p style={{color: "#dcdcdc"}}>We are happy to announce that the Kick Store family will be expanding! The new place is undergoing renovations
                and the thematics will be retro 90's, sports, fashion and ofcourse - KICKS! The store is located in the city centre, 
                right next to the town square. Everyone has some bussines in the town centre, so this can be your perfect excuse to
                visit us. The store is expecting to open by the end of next month. Stay tuned to see what kind of special offers we
                will prepare for you and get ready for the craziest kick party yet!</p>
                <MapPin />
            </div>


                <h2 style={{display: "flex", justifyContent:"center", marginBottom: "20px", color: "#ffffff", fontWeight: "bold", fontSize: "2rem"}}>Heritage Combo!</h2>
                <p style={{color: "#dcdcdc"}}>Special discount combos this week only! To celebrate old school and long lasting kick models, we have put
                together a special offer! 20% off on all OG shoes. If you buy two pairs, you get 30% off!!! Now that's a real deal. 
                Let's keep the legacy living and not let the plastic, soulless kicks flood the beautiful streets of our city. 
                You can find heritage sneakers with the blue tag strapped to them. Hurry up, the supplies are limited!</p>
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <img src="https://sneakernews.com/wp-content/uploads/2021/05/Nike-Air-Max-BW-DM3047-001-2.jpg?w=1140" style={{maxWidth: "50%", borderRadius: "10px", marginBottom: "20px"}} />
                </div>
         </div>
        
    )
}

export default Home;