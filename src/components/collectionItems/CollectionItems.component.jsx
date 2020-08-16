import React from 'react'
import './CollectionItems.style.scss'
import CustomButton from '../customButton/customButton.component'
import {connect} from 'react-redux'
import{addItem} from '../../redux/cart/cart.actions'

const CollectionItems=({item,addItem})=>{
        let {name,price,imageUrl}=item
    return(
        <div className='collection-item'>
            <div className='image' style={{
                background:`url(${imageUrl})`
            }}/>

            <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted>Add to Cart</CustomButton>   
        </div>
    )
}

const mapDispatchToProps=(dispatchEvent)=>({
    addItem:(item)=>dispatchEvent(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItems);