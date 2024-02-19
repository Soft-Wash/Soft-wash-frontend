import WashmanDashboardBody from "../../components/Washman Components/WashmanDashboardBody";
import WashmanSidebar from "../../components/Washman Components/WashmanSidebar";



function WashmanDashboardPage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanDashboardBody />
        </div>
    )
}


export default WashmanDashboardPage;