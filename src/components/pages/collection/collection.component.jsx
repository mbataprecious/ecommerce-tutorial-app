import React from 'react';
import { connect } from 'react-redux'
import {selectCollection} from '../../../redux/shopData/shopData.selector'

import './collection.style.scss'
import CollectionItems from '../../collectionItems/CollectionItems.component';

const CollectionPage=({collection})=>{
    let{title,items}=collection
    console.log(JSON.stringify(collection,null,2))

return (
    <div className="collection-page">
        <h1 className="title">
            {title}
        </h1>
            <div className='items'>
        {
        items.map(item=>(
        <CollectionItems key={item.id} item={item}/>
        ))
        }
        </div>
    </div>
)}
const mapStateToProps=(state,owmProps)=>({
    collection:selectCollection(owmProps.match.params.collectionId)(state)
  })
  
  export default connect(mapStateToProps)(CollectionPage)