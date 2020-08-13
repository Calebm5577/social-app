import React from 'react';
import './App.css';
import FarSideBar from "./components/FarSideBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat.js';
import { useStateValue } from "./StateProvider";
import Login from "./components/Login"


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        )
        : (
          <>
        <FarSideBar />
        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <h1>Hello</h1>
          </Route>
        </Switch>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
