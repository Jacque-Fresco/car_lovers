import Homepage from '../header/Homepage';
import { Button } from 'react-bootstrap';
import './Register.css';
import reg from './register.png'
const Register = () => {
    return (
        <div>
            <Homepage />
            <div>
                <img src={reg} id="p" />
                <h2>Register</h2>
                <div>
                    <label>E-mail</label>
                    <input type="text" id="form-control" name="e-mail" value="" />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" id="form-control" name="username" value="" />
                </div>
                <div>
                    <label id="hui">Password</label>
                    <input type="password" id="form-control" name="password" value="" />
                </div>
                <div>
                    <label id="hui">Repeat Password</label>
                    <input type="password" id="form-control" name="reppass" value="" />
                </div>
                <div id="btns">
                    <Button variant="info" id='btn1'>Create account</Button>
                    <Button  variant="light"><a href="/login">Have an account?</a></Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
