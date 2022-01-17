import Router from './Router';


function App() {

  const aboutData = {
    name:"Fotis Karayannopoulos",
    designation:"SENIOR ASSOCIATE",
    worksAs:"SUPREME COURT LAWYER",
    admittedAt:"Admitted ti Athens Bar in 1992",
    eid:"f_karayannopoulops@klclawfirm.com"
    
  }
  return (
    <div className="App" >
      <Router persondata= {aboutData} />
    </div>
  );
}

export default App;