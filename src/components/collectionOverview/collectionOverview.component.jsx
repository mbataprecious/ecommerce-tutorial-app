import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'
import {selectCollectionForPrewiev} from '../../redux/shopData/shopData.selector'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import './collectionOverview.style.scss'

const CollectionOverview=({collection})=>(
      <div className='collection-overview'>
        { 
     collection.map(({id,...otherCollections})=>(
        <CollectionPreview key={id} {...otherCollections}/>
        ))
        }
        </div>
)

const mapStateToProps=createStructuredSelector(
    {
      collection:selectCollectionForPrewiev
    }
  )
  
  export default connect(mapStateToProps)(CollectionOverview)