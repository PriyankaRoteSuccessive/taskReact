    import { DashUl,DashLi } from "../component/style";
const header = () =>{
    return(
        <div>
            <DashUl>
                <DashLi><a href="./">Dashboard</a></DashLi>
                <DashLi><a href="/contact" >Contact</a></DashLi>
                <DashLi><a href= "/about" >About us</a></DashLi>
                <DashLi><a href= "/login" >Login</a></DashLi>
                <DashLi><a href= "/modals" >Modal</a></DashLi>
            </DashUl>

        </div>
    )
}
export default header;