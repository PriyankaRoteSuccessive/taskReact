import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) =>{
  const auth = true;
  console.log ("hello",auth)
  return auth ? children : <Navigate to="/Welcome" />;
}
export default  PublicRoute