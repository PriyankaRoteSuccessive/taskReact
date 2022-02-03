import { DashHead } from "../component/style";
import ShowTable from "../Crud/showTable";
import ShowTableData from "../Crud/ShowTableData";
import { CrudTask } from "../Crud";
const Dashboard = () =>{

    return(
        <>
        {/* <Header/> */}
        <CrudTask/>
        {/* <ShowTable/> */}
        <ShowTableData/>
       
        </>  
    )
}
export default Dashboard;