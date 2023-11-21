import React from "react";
import WashmanSidebar from "../../components/Washman Components/WashmanSidebar";
import WashmanProfileBody from "../../components/Washman Components/WashmanProfileBody";




function WashmanProfilePage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanProfileBody />
        </div>
    )
}


export default WashmanProfilePage;