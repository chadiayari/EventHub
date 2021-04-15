import React from 'react'
import Footer from './Components/Footer';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyes';
import Home from './Components/Home/Home';
import Lieux from './Components/Lieux/Lieux';
import Propos from './Components/Propos/Propos';
function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/lieux" render={(props) => <Lieux {...props} />} />
      <Route path="/propos" render={(props) => <Propos {...props} />} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
