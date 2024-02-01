import WashmanSidebar from "../../components/Washman Components/WashmaSidebar";
import WashmanRequestSuppliesBody from "../../components/Washman Components/WashmanRequestSupplies";






function WashmanRequestSuppliesPage(){
    return(
        <div className="d-flex">
            <WashmanSidebar />
            <WashmanRequestSuppliesBody />
        </div>
    )
}


export default WashmanRequestSuppliesPage;