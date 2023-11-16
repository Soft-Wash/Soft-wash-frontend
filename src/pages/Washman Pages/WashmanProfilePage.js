import WashmanProfileBody from "../../components/Washman Components/WashmanProfileBody";
import WashmanSidebar from "../../components/Washman Components/WashmanSidebar";




function WashmanProfilePage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanProfileBody />
        </div>
    )
}


export default WashmanProfilePage;