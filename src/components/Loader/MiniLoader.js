import "../../styles/Loader Style/Loader.css"
import React from "react";
import { Audio, BallTriangle, MutatingDots } from 'react-loader-spinner';

function MiniLoader(){
  return(
    <div>
        <div className="loader-content2">
            <div className="loader2">
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

            </div>
        </div>
    </div>
  )
}

export default MiniLoader;