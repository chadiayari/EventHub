import React, {useState, useEffect} from "react";
import Login from './Login';
import Hero from './Hero';
import './App.css';

const App = () => {
  const[user, setUser]=useState('');
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  const[emailError, setEmailError]=useState("");
  const[passwordError, setPasswordError]=useState('');
  const[hasAccount, setHasAccount]=useState(false);

  const handleLogin= () => {
    setUser(!user);
  }

  const handleLogout= () => {
    setUser(!user);
  }
 
  return(
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
      
      <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      hasAccount={hasAccount}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
  )}
    </div>
  )
}

export default App;
