import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, RegisterMUI, LoginMUI,Welcome,Contact } from "./page/index";
import { Timer,Timer20,Login,Data,Modals } from "./component/index";
import PrivateRoute from "./router/PrivatRoute"
import PublicRoute from "./router/PublicRouter";
const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route path="/about"  element={<AboutUs data={props.persondata} />} />
            <Route path="" element={<Timer/>} />     
            <Route path="" element={<Timer20/>} />   
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/data" element={<Data/>} />
            <Route path="/modals" element={<Modals/>} />
            <Route path="/Welcome" element={<PrivateRoute><Welcome/></PrivateRoute>} />
            <Route path="/loginMUI" element={<PublicRoute><LoginMUI/></PublicRoute>} />
            <Route path="/registerMUI" element={<PublicRoute><RegisterMUI/></PublicRoute>} />
        </Routes>
        </BrowserRouter>
        </>  
    )
}
export default Router;