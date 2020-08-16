import React from 'react'
import './customButton.style.scss'


const CustomButton=({children, isGoogleSignIn,inverted,...otherProps})=>(
    <button className={`${inverted? 'inverted':''} ${isGoogleSignIn? 'is-google-signIn':'' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton