import React from 'react';
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from '../StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="Login">
            <div className="Login__container">
                <img id="img" src="https://image.cnbcfm.com/api/v1/image/105684220-1547727181154mb_slack_01.jpg?v=1547727329&w=1400&h=950" alt="slack logo" />
                <h1>Sign in</h1>
                <p>caleb's slack clone</p>
                <Button onClick={signIn}>Sign in with GOOGLE</Button>
            </div>

        </div>
    )
}

export default Login
