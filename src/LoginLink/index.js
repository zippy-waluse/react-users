import './index.css';
import { Link } from 'react-router-dom';

function LoginLink(){
    return(
        <div>
            <nav>
                <h1>My App</h1>
                <h1>Click</h1>
                <button type='submit'>  <Link to="/login">Login</Link></button>

               
            </nav>
        </div>
    )
}
export default LoginLink;

// return(


//     <div>
//        <form onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <button type="submit">Login</button>
//         <input placeholder="Enter username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
//         <br/>
//         <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
//         <Link to="/users"><button type='submit'>Login</button></Link>

//         <br/>
       
//        </form>
//     </div>
// )
