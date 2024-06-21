import './index.css';
import { Link } from 'react-router-dom';

function LoginLink(){
    return(
        <div>
            <nav>
                <h1>Display users</h1>
                <h1>Click</h1>
                <button type='submit'>  <Link to="/login">Login</Link></button>

               
            </nav>
        </div>
    )
}
export default LoginLink;

