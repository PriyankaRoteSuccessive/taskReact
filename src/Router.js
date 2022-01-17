import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs } from "./page/index";
import { Timer,Timer20,Login,Data,Modals } from "./component/index";
const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Dashboard/>} />
            <Route path="/about"  element={<AboutUs data={props.persondata} />} />
            <Route path="" element={<Timer/>} />     
            <Route path="" element={<Timer20/>} />   
            <Route path="/login" element={<Login/>} />
            <Route path="/data" element={<Data/>} />
            <Route path="/modals" element={<Modals/>} />
           
        </Routes>
        </BrowserRouter>
        </>  
    )
}
export default Router;