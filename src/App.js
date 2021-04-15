import React, {useState, useEffect} from "react";
import Login from './login.js';
import './App.css';

const App = () => {
  const[user, setUser]=useState('');
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  const[emailError, setEmailError]=useState("");
  const[passwordError, setPasswordError]=useState('');
  const[hasAccount, setHasAccount]=useState(false);

  const handleLogin= () => {

  }
 
  return(
    <div className="App">
      <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
    </div>
  )
}

export default App;
