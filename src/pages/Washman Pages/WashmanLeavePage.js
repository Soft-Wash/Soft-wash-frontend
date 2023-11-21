import WashmanLeaveForm from "../../components/Washman Components/WashmanLeaveForm";
import WashmanSidebar from "../../components/Washman Components/WashmanSidebar";


function WashmanLeavePage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanLeaveForm/>
        </div>
    )
}

export default WashmanLeavePage;