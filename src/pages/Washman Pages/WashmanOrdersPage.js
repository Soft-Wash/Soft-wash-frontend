import WashmanOrdersBody from "../../components/Washman Components/WashmanOrdersBody";
import WashmanSidebar from "../../components/Washman Components/WashmanSidebar";



function WashmanOrdersPage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanOrdersBody />
        </div>
    )
}


export default WashmanOrdersPage;