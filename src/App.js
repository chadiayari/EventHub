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
      <Route path="/login" component={Login}/>
      </Switch>
      </div>
      <div style={{zIndex:10000}}>
   

      </div>
    </BrowserRouter>
  );
}

export default App;
