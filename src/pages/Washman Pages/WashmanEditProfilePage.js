import WashmanSidebar from "../../components/Washman Components/WashmaSidebar";
import WashmanEditProfileBody from "../../components/Washman Components/WashmanEditProfileBody";



function WashmanEditProfilePage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanEditProfileBody />
        </div>
    )
}


export default WashmanEditProfilePage;