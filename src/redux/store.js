import {applyMiddleware,createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './rootReducer'
import reduxLogger from 'redux-logger';
import storage from 'redux-persist/lib/storage'

let middlewareArray=[]
if(process.env.NODE_ENV==='development')
   middlewareArray=[reduxLogger]

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store= createStore(persistedReducer,applyMiddleware(...middlewareArray))

export const persistor=persistStore(store)
export default {persistor,store}