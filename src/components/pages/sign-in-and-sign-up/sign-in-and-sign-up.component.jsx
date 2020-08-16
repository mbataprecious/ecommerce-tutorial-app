import React,{Component} from 'react'
import SignIn from '../../sign-in/sign-in.component'
import SignUp from '../../sign-up/sign-up.component'
import './sign-in-and-sign-up.style.scss'



class SignInAndSignUp extends Component{

render(){
    return(
        <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
        </div>
    )
}
}


export default SignInAndSignUp