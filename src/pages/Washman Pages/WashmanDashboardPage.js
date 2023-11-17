
import WashmanSidebar from "../../components/Washman Components/WashmaSidebar";
import WashmanDashboardBody from "../../components/Washman Components/WashmanDashboardBody";



function WashmanDashboardPage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanDashboardBody />
        </div>
    )
}


export default WashmanDashboardPage;