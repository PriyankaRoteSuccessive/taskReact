import { DashHead } from "../component/style";
import { MyButton} from "../component/index";
import { Header } from "../module/index";
import { Counter,Timer, Timer20} from "../component/index";
import ThemeContext from "../context/ThemeContext"
import ThemeSwitcher from "../component/ThemeSwitcher";
import { useContext } from "react";
const Contact = () =>{
    const themes =useContext(ThemeContext)
    return(
        <>
         {/* <div style={themes.theme}>   */}
        <Header/>
        <DashHead>Welcome to Contact page</DashHead>
        <MyButton name=" My Button" class="variant" />
        <Counter/>
        <Timer/>
        <Timer20/>
        <ThemeSwitcher/>
     {/* </div>   */}
        </>  
    )
}
export default Contact;