import'./index.css';
import { useState } from 'react';
import {login} from "./utils";






import React from 'react';

const UserList = ({ users, onSelect }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onSelect(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};





const Login = ()=>{

const [username,setUserName] = useState("");
const [password,setPassword] = useState("");
console.log({username});

console.log({username})
const handleLogin = async(event)=>{
    event.preventDefault();
    const result = await login({username,password})
    console.log({result});
}

    return(


        <div>
           <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <button type="submit">Login</button>
            <input placeholder="Enter username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>

            <br/>
           
           </form>
        </div>
    )
}

export default Login;