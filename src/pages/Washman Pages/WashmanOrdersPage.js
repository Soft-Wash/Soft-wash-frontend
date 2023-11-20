
import WashmanSidebar from "../../components/Washman Components/WashmaSidebar";
import WashmanOrdersBody from "../../components/Washman Components/WashmanOrdersBody";



function WashmanOrdersPage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanOrdersBody />
        </div>
    )
}


export default WashmanOrdersPage;