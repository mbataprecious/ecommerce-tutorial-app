import shopData from '../../components/pages/shop/shop.data'
const INITIAL_STATE={
    shopData:shopData
}

const shopDataReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default shopDataReducer