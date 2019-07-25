import './Registration.scss'
import React, { Component } from 'react'

class Registration extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name:{
        value: '',
        valid: true
      },
      phone:{
        value: '+38',
        valid: true
      },
      login:{
        value: '',
        valid: true
      },
      email:{
        value: '',
        valid: true
      },
      password:{
        value: '',
        valid: true
      },
      description:'Slava Ukraini'
    }
  }
  handleChange(e) {
    let state = this.state
    state[e.target.name].value = e.target.value
    this.setState(state)
  }

  validationEmail = () => {
    let state = this.state.email
    let reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    if (reg.test(state.value) ) {
      state.valid = true
    } else {
      state.valid = false
      
    }
    this.setState({email:state})
  }
  validationName = () => {
    let state = this.state.name
    let reg = /^[A-Z][a-zA-Z]+\b/g
    if (reg.test(state.value) ) {
      state.valid = true
    } else {
      state.valid = false
      
    }
    this.setState({name:state})
  }
  validationLogin = () => {
    let state = this.state.login
    let reg = /^[a-z][a-zA-Z]+\B/g
    if (reg.test(state.value) ) {
      state.valid = true
    } else {
      state.valid = false
    }
    this.setState({login:state})
  }
  validationPassword = () => {
    let state = this.state.password 
    let reg = /^[A-Z][a-zA-Z]+\d/g
    if (reg.test(state.value) ) {
      state.valid = true
    } else {
      state.valid = false
    }
    this.setState({password:state})
  }
  validationPhone = () => {
    let state = this.state.phone 
    let reg = /^[+]+\d{12}$/g
    if (reg.test(state.value) ) {
      state.valid = true
    } else {
      state.valid = false
    }
    this.setState({phone:state})
  }
  registerB = () => {
    this.validationEmail()
    this.validationLogin()
    this.validationPassword()
    this.validationPhone()
    this.validationName()
    const { login, password, email, phone, name } = this.state
    if (login.valid && password.valid && email.valid && phone.valid && name.valid){
      alert('registration is done')
    }else
    alert('continue registration')
  }

  render () {
    const { login, password, email, phone, name, description } = this.state

    return (
      <div className='registration_main'>
          <div className='registration_form'>
          <div className='name_login'>
            <input className={name.valid ? '':'error'} onBlur={this.validationName} name='name' value={name.value} onChange={(e) => {this.handleChange(e) }} placeholder='Enter name' type='text' />
            <p>{name.valid ? '' : 'Invalid name'}</p>
            <input className={login.valid ? '':'error'} onBlur={this.validationLogin} name='login' value={login.value} onChange={(e) => {this.handleChange(e) }} placeholder='Enter login' type='text' />
            <p>{login.valid ? '' : 'Invalid login'}</p>
          </div>
          <div className='email_password_tel'>
            <input className={email.valid ? '' : 'error'} onBlur={this.validationEmail} name='email' value={email.value} onChange={(e) => {this.handleChange(e) }} placeholder='Email' type='text' />
            <p>{email.valid ? '' : 'Invalid email'}</p>
            <input className={password.valid ? '':'error'} onBlur={this.validationPassword} name='password' value={password.value} onChange={(e) => {this.handleChange(e) }} placeholder='Password' type='password' />
            <p>{password.valid ? '' : 'Invalid password'}</p>
            <input className={phone.valid ? '':'error'} onBlur={this.validationPhone} name='phone' value={phone.value} onChange={(e) => {this.handleChange(e) }} placeholder='phohe' type='tel' />
            <p>{phone.valid ? '' : 'Invalid phone'}</p>
          </div>
          <div className='description'>
            <textarea value={description} onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder='Description' type='text' />
          </div>
        </div>
        <div>
          <button onClick={this.registerB}>Registration</button>
        </div>

      </div>
    )
  }
}

export default Registration
