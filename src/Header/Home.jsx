import React from "react";
import Slider from "../Components/Slider"; //importing Slider Component created with Bootstrap
import sliderdata from "../sliderdata.json"; //importing data to be passed into the Slider
import MapPin from "../Components/MapPin"; //importing MapPin Component created with leaflet

function Home() {

    //Styles

    const pageStyle = {
        backgroundColor: "black",
        color: "f0f0f0",
        minHeight: "100vh",
        padding: "20px",
        margin: "0 auto"   
    };

    const divStyle = {
        padding: "20px",
        margin: "auto"
    };

    const h2Style = {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "ffffff",
        marginBottom: "20px",
        textAlign: "center"
    };

    const pStyle = {
        color: "#dcdcdc",
        fontSize: "1.3rem"
    };

    const imageDivStyle = {
        textAlign: "center",
         marginTop: "20px"
        };

    const imageStyle = {
        maxWidth: "50%",
         borderRadius: "10px",
          marginBottom: "20px"
        };

    return (
        //Home Page
        <div style={pageStyle}>

            {/* h2 and Slider component */}
            <div style={divStyle}>
                <h2 style={h2Style}>🔥Hottest Releases🔥</h2>
                <Slider slides={sliderdata} />
            </div>
             
             {/* h2 and MapPin component */}
            <div style={divStyle}    >
                <h2 style={h2Style}>🎉New Store Opening!</h2>
                <p style={pStyle}>
                We are happy to announce that the Kick Store family will be expanding! The new place is undergoing renovations
                and the thematics will be retro 90's, sports, fashion and ofcourse - KICKS! The store is located in the city centre, 
                right next to the town square. Everyone has some bussines in the town centre, so this can be your perfect excuse to
                visit us. The store is expecting to open by the end of next month. Stay tuned to see what kind of special offers we
                will prepare for you and get ready for the craziest kick party yet!
                </p>
                <MapPin />
            </div>

            {/* Heritage Combo div */}
            <div>
                <h2 style={h2Style}>Heritage Combo!</h2>
                <p style={pStyle}>
                Special discount combos this week only! To celebrate old school and long lasting kick models, we have put
                together a special offer! 20% off on all OG shoes. If you buy two pairs, you get 30% off!!! Now that's a real deal. 
                Let's keep the legacy living and not let the plastic, soulless kicks flood the beautiful streets of our city. 
                You can find heritage sneakers with the blue tag strapped to them. Hurry up, the supplies are limited!
                </p>{/* Image div */}
                <div style={imageDivStyle}>
                    {/* Image */}
                    <img 
                    src="https://sneakernews.com/wp-content/uploads/2021/05/Nike-Air-Max-BW-DM3047-001-2.jpg?w=1140"
                    style={imageStyle}
                    alt = "Heritage Combo"
                    />
                </div>
            </div>
         </div>
        
    )
}

export default Home;