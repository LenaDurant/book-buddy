import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const navigate = useNavigate();

    const register = async() => {
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
        setpasswordInput("");
    }
    
    const login = async() => {
        const response = fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput
            })
        });
        const json = response.json();
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
              <input value={nameInput} onChange={(event) => { setNamelInput(event.target.value)}} type="name" placeholder="name" />
             </>
        }
        <input value={emailInput} onChange={(event) => { setEmailInput(event.target.value) }} typye="email" placeholder="email"/>
        <input value={passwordInput} onChange={(event) => { setPasswordInput(event.target.value) }} typye="password" placeholder="password"/>
        {
            showLogin ? <button>Log In</button> : <button onClick={register}>Register</button>
        }
        </form>
        {
            showLogin ?
                <p>Not a Member? What are you waiting for! <button onClick={() => { setShowLogin(false) }}>Register</button> now!</p>:
                <p>Already a Member <button onClick={() => { setShowLogin(true) }}>Logi In</button> here!</p>:
        }
         {/* <form onSubmit={login}>
            <input type="email" placeholder="email" value={emailInput} onChange={(event) => { setEmailInput(event.target.value)}}/>
            <input type="password" placeholder ="password" value={passwordInput} onChange={(event) => { setpasswordInput(event.target.value  )}}/>
            <button>Log In</button>
        </form>  */}

            
    </>
        
    )
}

export default LoginForm