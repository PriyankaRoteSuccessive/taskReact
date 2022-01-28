import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) =>{
  let Token_key = localStorage.getItem("token")
  console.log (" here is Token",Token_key)
  return Token_key ? children : <Navigate to="/loginMUI" />;
}
export default  PrivateRoute