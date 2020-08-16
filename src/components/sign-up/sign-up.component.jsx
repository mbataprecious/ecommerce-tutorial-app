import React from 'react'
import FormInput from '../form-input/form-input.component' 
import CustomButton from '../customButton/customButton.component'
import './sign-up.style.scss'   
import {auth,createUserProfileDocunent} from '../firebase/firebase.util'
class SignUp extends React.Component{ 
    constructor(props){
        super(props)

        this.state={
            displayName:'' ,
            email:'',
            password:'',
            confirmPassword:''
        }
    }

     handleSubmit=async (e)=>{
         e.preventDefault()
         let{
          displayName,
          email,
          password,
          confirmPassword
      }=this.state

      if(password===confirmPassword){
        try{
        const {user}= await auth.createUserWithEmailAndPassword(email,password)
        console.log(user)
        await createUserProfileDocunent(user,{displayName})
         
         this.setState({
          displayName:'',
          email:'',
          password:'',
          confirmPassword:''
      }) 
        }catch(err){
          console.log(err)
        }
      }else{
        alert('password and confirm password are not equal')
        return
      }
    }

    handleChange=(e)=>{
        let {name,value}=e.target
      this.setState({
        [name]:value
      })
    }

    render(){

        return( 
            <div className='sign-up'>
              <h2 className='title'>I do not have an account</h2>
              <span>Sign up with email and password</span> 
              <form className='sign-up-form' onSubmit={this.handleSubmit}>
              <FormInput name='displayName' type='text' label='display Name' handleChange={this.handleChange} value={this.state.displayName} required/>
              <FormInput name='email' type='text' label='Email' handleChange={this.handleChange} value={this.state.email} required/>
              <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={this.state.password} required/>
              <FormInput name='confirmPassword' type='password' label='Confirm Password' handleChange={this.handleChange} value={this.state.confirmPassword} required/>
              <CustomButton>Sign Up</CustomButton>
              </form>
                
                
                 </div> 
        )
    }
}

export default SignUp;

