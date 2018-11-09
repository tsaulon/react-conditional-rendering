import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;   //  conditional rendering here
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

class Mailbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unreadMessages: this.props.unreadMessages
    }
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        { /* true && expression == expression*/
          /* false && expression == false */
          this.state.unreadMessages.length > 0 &&
          <h2>
            You have {this.state.unreadMessages.length} unread messages.
        </h2>
        }
      </div>
    );
  }
}

class App extends Component {

  render() {
    /* 
      Note: Way to not render components based on condition
      if(someCondition === true) 
        return null;
    */

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LoginControl isLoggedIn={true} />
          <Mailbox unreadMessages={['React', 'Re:React', 'Re:Re:React', 'Re:Re:Re:Re:React']} />
        </header>
      </div>
    );
  }
}

export default App;
