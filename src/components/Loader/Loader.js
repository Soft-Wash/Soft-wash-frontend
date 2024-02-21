import "../../styles/Loader Style/Loader.css"
import React from "react";
import { Audio, BallTriangle, MutatingDots } from 'react-loader-spinner';


function Loader(){
    return(
        <div className="loader-content">
            <div className="loader">
            {/* <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="rgb(33,28,106)"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            /> */}
                <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="rgb(33,28,106)"
                secondaryColor="rgb(13,202,240)"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            <h3>Loading...</h3>
            </div>
        </div>
    )
}

export default Loader;