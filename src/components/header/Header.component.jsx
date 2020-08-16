import React from 'react'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {Link} from 'react-router-dom'
import {auth} from '../firebase/firebase.util'
import './Header.style.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cart-icon/Cart-icon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'

// selectorsfor redux
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'


const Header=({currentUser,hidden})=>{
    return(
        <div className='header'>
               <Link to='/' className='logo-container'>
                <Logo className='logo'/>
                </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <div className='option'>CONTACT</div>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>{'sign out'.toUpperCase()}</div>:
                    <Link className='option' to='/signin'>{'sign in'.toUpperCase()}</Link>
                }
                <CartIcon/>
            </div>
            {
                (hidden)?null:<CartDropdown/>  
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})



export default connect(mapStateToProps)(Header);