import { useState } from 'react';

const LoginForm = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const login = async() => {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            })
        })
        const json = await response.json();
        const token = json.access_token;
        console.log(token);

    }
    
    return (
        <form onSubmit={login}>
            <input placeholder="email" value={emailInput} onChange={(event) => { setEmailInput(event.target.emailInput)}}/>
            <input placeholder ="password" value={passwordInput} onChange={(event) => { setpasswordInput(event.target.passwordInput)}}/>
            <button>Log In</button>
        </form>
    )
}

export default LoginForm