import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login"
import Users from "./Users";
import { login } from "./Login/utils";
import LoginLink from './LoginLink'





function App(){
   return(
    <div>
      <LoginLink/>

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
     
    </div>
   )
}

export default App;


