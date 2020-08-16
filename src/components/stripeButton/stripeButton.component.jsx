import React from 'react'
import ReactStripe from 'react-stripe-checkout'


const StripeButton=({price})=>{
   let priceForStripe=price*100;
   let pKey='pk_test_51H33EQBGRtn8msYyPdjHTEqwCVLedqutdH0pqLxtGONiW76BYYNw5xJkam72ywRX51JAjxMpjCDLXYHEjzy3klp600m2KLiwNE'

   let onToken=(token)=>{
    console.log(token)
       alert('transaction sucessful...')
   }

   
   return(
       <ReactStripe 
       label='Pay Now'
       name='CRWN Clothing Ltd.'
       billingAddress
       shippingAddress
       image='https://svgshare.com/i/CUz.svg'
       description={`Your total is $${price}`}
       amount={priceForStripe}
       stripeKey={pKey}
       panelLabel='Pay Now'
       token={onToken}
       />
   )
}


export default StripeButton