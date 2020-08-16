import React from 'react';
import './form-input.style.scss'

const FormInput=({handleChange,label, ...otherProps})=>(
    <div className='group'>
      <input className='form-input' type='email' onChange={handleChange} {...otherProps} />
        {
            label &&(
            <label className={`${otherProps.value.length ?'shrink':''} form-input-label`} htmlFor={label}>{label}</label>
            )
        }
    </div>
)

export default FormInput