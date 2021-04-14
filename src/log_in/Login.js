import Homepage from '../header/Homepage';
import './Login.css';
import login from './login.png'
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Homepage />
            <div>
                <img src={login} id="p" />
                <h2>Login</h2>
                <div>
                    <label id="lab">Username</label>
                    <input type="text" id="form-control" name="username" value="" />
                </div>
                <div>
                    <label id="lab">Password</label>
                    <input type="password" id="form-control" name="password" value="" />
                </div>
                <div id="btns">
                    <Button variant="info" id='btn1'>Login</Button>
                    <Button variant="light"><a href="/register">Create account</a></Button>
                </div>
            </div>
        </div>

    );
}

export default Login;
