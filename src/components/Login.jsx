import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const navigate = useNavigate();

    const register = async(event) => {
        event.preventDefault();
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameInput,
                email: emailInput,
                password: passwordInput
            })
        });
        
        const json = await response.json();
        setNameInput("");
        setEmailInput("");
        setPasswordInput("");
    }
    
    const login = async(event) => {
        event.preventDefault();
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput
            })
        });
        const json = await response.json();
        console.log(json.access_token);
        navigate('/')
        
    }
    return (
     <>
      <form>
        {
            showLogin ? 
             null :
             <>
              <input value={nameInput} onChange={(event) => { setNameInput(event.target.value)}} placeholder="name" />
             </>
        }
        <input value={emailInput} onChange={(event) => { setEmailInput(event.target.value) }} type="email" placeholder="email"/>
        <input value={passwordInput} onChange={(event) => { setPasswordInput(event.target.value) }} type="password" placeholder="password"/>
        {
            showLogin ? <button>Log In</button> : <button onClick={register}>Register</button>
        }
        </form>
        {
            showLogin ?
                <p>Not a Member? What are you waiting for! <button onClick={() => { setShowLogin(false) }}>Register now!</button></p>:
                <p>Already a Member? <button onClick={() => { setShowLogin(true) }}>Log In</button> here!
                </p>
            }
       
    </>
        
    );
}

export default LoginForm