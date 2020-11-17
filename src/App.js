import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
export const UserContext = createContext();




function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>

      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/order/:service">
            <Dashboard></Dashboard>
          </PrivateRoute>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/apartment/:apartmentId/:apartmentTitle/:apartmentPrice">
          <ApartmentDetails></ApartmentDetails>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>


    </Router>
   </ UserContext.Provider>



       

    
  );
}

export default App;
