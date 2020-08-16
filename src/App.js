import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/Header.component'
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './components/pages/checkout/checkout.component'
import {auth,createUserProfileDocunent}from './components/firebase/firebase.util'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'




class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
    }
  }

  unsubscribeFromAuth =null


  componentDidMount(){
 const {setCurrentUser}=this.props
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async (userAuth)=>{
     
      if(userAuth){ 
        const userRef= await createUserProfileDocunent(userAuth)

        userRef.onSnapshot (snapShot=> {
setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    let {currentUser}=this.props
    return (
    <div>
      <Header/>
<Switch>
 <Route exact path='/' component={HomePage} />
 <Route  path='/shop' component={ShopPage} /> 
 <Route  path='/checkout' component={CheckoutPage} /> 
 <Route exact path='/signin' render={()=>((currentUser)?<Redirect to='/'/> :<SignInAndSignUp/>)} /> 
</Switch>
    </div>
  )}

  
  
}
 const mapDispatchToProps=dispatchEvent=>({
      setCurrentUser:user=>dispatchEvent(setCurrentUser(user))
  })

  const mapStateToProps=({user})=>({
    currentUser:user.currentUser
  })
export default connect(mapStateToProps,mapDispatchToProps)(App);
