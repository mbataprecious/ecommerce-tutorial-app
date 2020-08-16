export const addItemToCart=(cartItems,cartToAdd)=>{
    let cartItemMatch=cartItems.find(cartItem=>cartItem.id===cartToAdd.id)
     if(cartItemMatch){
         return cartItems.map(cartItem=>
            (cartItem.id===cartToAdd.id)?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
     }

     return [...cartItems,{...cartToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    let cartItemMatch=cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id)

    if(cartItemMatch.quantity!==1)
        return cartItems.map(cartItem=>(cartItem.id===cartItemToRemove.id)?{...cartItem, quantity:cartItem.quantity-1}:cartItem)
    
    return cartItems.filter(cartItem=>(cartItem.id!==cartItemToRemove.id))
}