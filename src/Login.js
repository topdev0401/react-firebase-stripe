import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import { auth } from './firebase'

function Login() {
    const AMAZON_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png';
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                history.push('/');
            })
            .catch(error => { throw Error(error) });
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => {
                throw Error(error);
            });
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={AMAZON_LOGO} alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form className="login__form">

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="login-email" aria-describedby="login-email" value={email} onChange={e => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="login-input" aria-describedby="login-password" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormControl>


                </form>

                <Button className="login__buttonSignin" variant='outlined' onClick={signIn}>Sign In</Button>

                <p>
                    By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Noties and our Interest.
                </p>

                <Button className="login_buttonSignup" variant='outlined' onClick={register}>Create your Amazon Account</Button>
            </div>
        </div>
    )
}

export default Login
