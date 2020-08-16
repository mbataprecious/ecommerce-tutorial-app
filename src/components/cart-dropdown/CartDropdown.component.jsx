import React from 'react';
import CustomButton from '../customButton/customButton.component'
import CartItem from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartAction}from '../../redux/cart/cart.actions'
import './CartDropdown.style.scss'

const CartDropdown=({cartItems,history,dispatch})=>{

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(({id,...others})=>(
                    <CartItem key={id} {...others}/>
                ))
                :
                <span className='empty-message'>Your Cart is Empty</span>
            }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout')
                dispatch(toggleCartAction())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps=(state)=>({
     cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));