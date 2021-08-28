
import './App.css';
import {  Switch,  Route,  Link} from "react-router-dom";
import SignUp from './Components/SignUp';

import SignIn from './Components/SignIn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">

    
  
    

        <Route  path="/home">
          
          <NavBar />
          <Home />
           <Footer/>
        </Route>
          
          <Route  path="/admin">
            <SignIn/>
          </Route>
          <Route  path="/signup">
            <SignUp/>
          </Route>
   
    </div>
  );
}

export default App;
