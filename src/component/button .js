import {Btn} from "./style"
const MyButton = (props) =>{
    return(
     <>
        <Btn color="red">{props.name}</Btn>
        <br/><br/>
        <Btn color="grey">{props.name}</Btn>
        <br></br>
        <br></br>
       
     </>
    )
}

export default MyButton;