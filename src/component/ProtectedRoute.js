import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
} from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticated(cb){
        this.isAuthenticated = true
        setTimeout(cb, 100) 
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) 
    }

}

const Public = () => <h1>Public link is working</h1>
const Protected = () => <h1>Protected link is working</h1>

class Login extends React.Component {
    state = {
        redirectToReferrer : false
    }
    login = () => {
        fakeAuth.authenticated(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    } 
    render() {
        const { redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from : { pathname: '/'}}
        
        if(redirectToReferrer === true ) {
            return (
                <redirect to={ from } />
            )
        }
        return (
            <div>
                <p> You must login for this page at {from.pathname} </p>
                <button onClick= {this.login}> Log-in </button>
            </div>
        )
    }
}

const PrivateRoute = ({ component : Component, ...rest }) => (
    <Route { ...rest } render = {(props) => (
        fakeAuth.isAuthenticated === true ? <Component {...props} /> 
        : <Redirect to= {{
            pathname : '/login',
            state : { from:props.location}
        }} /> 
    )} />
)

const AuthButton = withRouter (({history}) => (
    fakeAuth.isAuthenticated === true
    ? <p>
        Welcome !! <button onClick = {() => {
            fakeAuth.signout(() => history.push('/'))
        }}> Sign-Out </button>
    </p>
    : <p> You are not logged in </p>
))



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li><Link to='/public'>Public-page-link</Link></li>
                        <li><Link to='/protected'>Protected-page-link</Link></li>
                    </ul>

                <Route path='/public'component={Public} /> 
                <Route path='/login' component={Login} />  
                <PrivateRoute path='/protected' component={Protected} />
                </div>
            </Router>
        )
    }
}

export default App