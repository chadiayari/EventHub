import React from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyes';
import Home from './Components/Home/Home';
import Lieux from './Components/Lieux/Lieux';
import Propos from './Components/Propos/Propos';
import Form from './Components/Form/components/Form';
import {history} from './history';
import Places from './Components/Places/Places';
import Login from './Login/Login';
import Events from './Components/Events/Events';
import Event from './Components/Event/Event';
import Success from './Components/Places/Success';
import Signup from './Signup/Signup';


function App() {

  console.log('location',history.location.pathname )

  return (
    <BrowserRouter history={history}>
      <GlobalStyle />
    
      <div style={{minHeight:"75vh"}}>

     
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/places" render={(props) => <Lieux {...props} />} />
      <Route path="/about-us" render={(props) => <Propos {...props} />} />
      <Route path="/eventform" render={(props) => <Form {...props} />} />
      <Route path="/place" component={Places}/>
      <Route path="/success" render={(props) => <Success {...props} />} />
      <Route path="/login" component={Login}/>
      <Route path="/events" render={(props) => <Events {...props} />} />
      <Route path="/event/:id" render={(props) => <Event {...props} />} />
      <Route path="/signup" component={Signup}/>


      </Switch>
      </div>
      <div style={{zIndex:10000}}>
   

      </div>
    </BrowserRouter>
  );
}

export default App;