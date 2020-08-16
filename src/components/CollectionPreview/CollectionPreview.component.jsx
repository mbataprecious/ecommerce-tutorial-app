import React from 'react'
import './CollectionPreview.style.scss'
import CollectionItems from '../collectionItems/CollectionItems.component'

const CollectionPreview=({title,items})=>{

    return(
        <div className='collection-preview'>
<div className='title'><h3>{title.toUpperCase()}</h3></div>
         <div className='preview'>
        {
            items.filter(( item, i)=>i<4).map( (item)=>(
            <CollectionItems key={item.id} item={item}/>
            ))
        }
            </div>
        </div>
    )
}


export default CollectionPreview