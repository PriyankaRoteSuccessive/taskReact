import { DashHead } from "../component/style";
import { MyButton} from "../component/index";
import { Header, ShowdataTable } from "../module/index";
import { Counter,Timer, Timer20} from "../component/index";
import ThemeContext from "../context/ThemeContext"
import ThemeSwitcher from "../component/ThemeSwitcher";
import { useContext } from "react";
const Dashboard = () =>{
    const themes =useContext(ThemeContext)
    return(
        <>
        <Header/>
        <DashHead>Welcome to dashboards</DashHead>
        <ShowdataTable/>
        </>  
    )
}
export default Dashboard;