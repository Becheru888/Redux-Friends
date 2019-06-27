import React from 'react';
import { Route, Redirect } from "react-router";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route
          path="/"
          render={pr =>
            localStorage.getItem("token") ? (
              <div>
                <AddFriend {...pr} />
                <Friends {...pr} />
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/login" render={props => <Login {...props} />} />
      </div>
    );
  }
}

export default App;