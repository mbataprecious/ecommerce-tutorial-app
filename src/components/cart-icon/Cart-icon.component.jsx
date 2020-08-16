import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import './Cart-icon.style.scss'
import {connect} from 'react-redux'
import {toggleCartAction} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon=({toggleHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps=dispatchEvent=>({
    toggleHidden:()=>dispatchEvent(toggleCartAction())
})

const mapStateToProps=(state)=>({
    itemCount:selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)