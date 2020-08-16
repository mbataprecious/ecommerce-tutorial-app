import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../../redux/cart/cart.selectors'
import CheckoutItem from '../../checkout-items/checkout-items.component'
import  StripeButton  from '../../stripeButton/stripeButton.component.jsx'

import './checkout.styles.scss'

const CheckoutPage=({cartItems,Total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block">
                <span className="">Product</span>
            </div>
            <div className="header-block">
                <span className="">description</span>
            </div>
            <div className="header-block">
                <span className="">Qantity</span>
            </div>
            <div className="header-block">
                <span className="">Price</span>
            </div>
            <div className="header-block">
                <span className="">remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
<div className="total">TOTAL:${Total}</div>
      <StripeButton price={Total}/>
      <div className='btn-warning'>Please use the following test credit card for your payment <br/>
        4242 4242 4242 4242 - Exp: 01/20 CVV: 123
      </div>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    Total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)