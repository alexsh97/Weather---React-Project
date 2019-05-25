import React from "react";


    const Weather = (props) => {
        return (
            <div className="infoWeath">
            { props.city &&
              <div>
                <p>Miasto : {props.city}, {props.country}</p>
                <p>Temperatura : {props.temp}</p>
                <p>Cisnienie : {props.pressure}</p>
                <p>Zachód słońca : {props.sunset}</p>
              </div>
            }
            <p className="error">{props.error}</p>
            </div>
        );
    }

export default Weather;