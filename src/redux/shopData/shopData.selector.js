import {createSelector} from 'reselect';

const selectShop=state=>state.shop

export const selectShopData=createSelector(
    [selectShop],
    (shop)=>shop.shopData
)

export const selectCollection=(collectionId)=>createSelector(
    [selectShopData],
    (collection)=>collection[collectionId]
)

export const selectCollectionForPrewiev=createSelector(
    [selectShopData],
    (collection)=>Object.keys(collection).map(item=>collection[item])
)
