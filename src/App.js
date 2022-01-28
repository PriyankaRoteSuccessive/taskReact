import Router from './Router';
import Theme from "./context/ThemeContext"
import { useState } from 'react';


function App() {

  const aboutData = {
    name:"Fotis Karayannopoulos",
    designation:"SENIOR ASSOCIATE",
    worksAs:"SUPREME COURT LAWYER",
    admittedAt:"Admitted ti Athens Bar in 1992",
    eid:"f_karayannopoulops@klclawfirm.com" 
  }
  const [theme, setTheme] = useState("light")
  const value = { theme, setTheme }
  return (
    <div className="App" >
       <Theme.Provider value={value}>
       <Router persondata= {aboutData} />
       </Theme.Provider>
     
    </div>
  );
}

export default App;