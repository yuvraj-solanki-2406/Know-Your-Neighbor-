import React, { Component } from 'react';
import './Login.css';
import { login } from '../../service/OnlineService';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';
import Footer from '../../pages/Footer';

export const API_BASE_URL = 'http://localhost:8080';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ACCESS_TOKEN = 'accessToken';


class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    render() {
        if (this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/profile",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to Know Your Neighborhood</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

//Social Login Form
class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google form-control" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" style={{ marginTop: '-2px' }} /> Log in with Google</a>

                <a className="btn btn-block social-btn facebook form-control" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" style={{ marginTop: '-1px' }} /> Log in with Facebook</a>
            </div>
        );
    }
}

//Local LoginForm
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/profile");
                window.location.reload();
            }).catch(error => {
                Alert.error((error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <input type="email" name="email"
                            className="form-control" placeholder="Email"
                            value={this.state.email} onChange={this.handleInputChange} required />
                    </div>
                    <div className="form-item">
                        <input type="password" name="password"
                            className="form-control" placeholder="Password"
                            value={this.state.pasword} onChange={this.handleInputChange} required />
                    </div>
                    <div className="form-item">
                        <button type="submit" className="btn btn-block btn-primary">Login</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Login
