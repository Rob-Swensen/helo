import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes.js';
import { withRouter } from 'react-router-dom';
import './reset.css';
import './App.css';


function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/'
      ? (<>
      {routes}
      </>)
      : (<> 
      <Nav />
      {routes}
      </>
      )}
    </div>
  );
}

export default withRouter(App);
