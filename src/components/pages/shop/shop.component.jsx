import React from 'react'
import CollectionOverview from '../../collectionOverview/collectionOverview.component'
import CollectionPage from '../collection/collection.component'
import {Route} from 'react-router-dom'


const ShopPage=({collection,match})=>{
  console.log(collection)
      return(
          <div className='shop-page'>
            <Route exact path={match.path} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
          </div>
        
      )
    
}

export default ShopPage