import React, {Component} from 'react'; 
import axios from 'axios'; 
import {connect} from 'react-redux'; 
import {getUser} from '../redux/authReducer'; 

class Login extends Component {
    constructor(){
        super(); 
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        axios.post('/auth/login', {email: this.state.email, password: this.state.password}).then(res => {
            const {email, id} = res.data

            this.props.getUser({email, id})
            this.props.history.push('/dash')
        })
    }

    handleRegister = () => {
        const {email, password} = this.state; 
        axios.post('/auth/register', {email, password}).then(res => {
            const {email, id} = res.data
            this.props.getUser({email, id})
            this.props.history.push('/dash')
        })
    }

    render(){

        console.log(this.state); 
        return(
            <div className='login-page'>
                <div className='login-box'>

                    <div className='login-inputs'>
                        <input 
                            maxLength='20'
                            placeholder='Enter Email'
                            name='email'
                            onChange={(event) => this.handleInput(event)}
                            className='email-input'
                            />
                        <input 
                            type='password'
                            maxLength='20'
                            placeholder='Enter Password'
                            name='password'
                            onChange={(event) => this.handleInput(event)}
                            />
                    </div>

                    <div className="login-buttons">
                        <button onClick={this.handleLogin} className='login-button'>Log In</button>
                        <button onClick={this.handleRegister}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Login);