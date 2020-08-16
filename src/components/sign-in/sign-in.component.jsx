import React from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import  CustomButton  from '../customButton/customButton.component'
import {signinWithGoogle,auth} from '../firebase/firebase.util'
class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async (e)=>{
        e.preventDefault()
        let {email,password}=this.state
        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch(err){
         console.log(err)
        }
       
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }


    render(){
        return(
        <div className='sign-in'>
                <h2 className='title'>I Already have an Account</h2>
                <span>sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email} required/>
            <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required/>
    <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton onClick={signinWithGoogle} isGoogleSignIn >{' '}Sign In with Google{' '}</CustomButton>    
        </div>
      
            </form>
            </div>
        )
    }
}


export default SignIn