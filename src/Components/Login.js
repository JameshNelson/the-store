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
        return(
            <div>
                <input 
                    maxLength='20'
                    placeholder='Enter Email'
                    name='username'
                    onChange={(event) => this.handleInput(event)}
                    />
                <input 
                    type='password'
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(event) => this.handleInput(event)}
                    />
                    <button onClick={this.handleLogin}>LOG IN!</button>
                    <button onClick={this.handleRegister}>REGISTER!</button>
            </div>
        )
    }
}

export default connect(null, {getUser})(Login);