import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PriceDetails from './Components/priceDetails/PriceDetails'
import Home from './Components/home/Home'
import NotFound from './Components/notFound/NotFound'
import TopNav from './Components/Nav/TopNav'

function App() {
  return (
 <Router>
   <TopNav/>
   <Switch>
      <Route path='/price-details' component={PriceDetails}/>
      <Route path="/" exact component={Home}/>
      <Route path='*' component={NotFound}/>
   </Switch>
 </Router>
  );
}

export default App;
