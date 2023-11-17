import WashmaSidebar from "../../components/Washman Components/WashmaSidebar";
import WashmanSingleOrderBody from "../../components/Washman Components/WashmanSingleOrderBody";





function WashmanSingleOrderPage(){
    return(
        <div className="d-flex">
            <WashmaSidebar />
            <WashmanSingleOrderBody />
        </div>
    )
}



export default WashmanSingleOrderPage;