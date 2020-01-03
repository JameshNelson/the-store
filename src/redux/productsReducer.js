import axios from 'axios'; 

const initialState = {
    products: [],
    loading: false
}

const GET_PRODUCTS = 'GET_PRODUCTS'; 

export  function getProducts(){
    let products =  axios.get('/api/products').then(res => res.data).catch(err => console.log(err)); 
    // console.log(products); 

    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export default function productsReducer(state = initialState, action){
    console.log(action); 
    const {type, payload} = action; 
    switch(type){
        case GET_PRODUCTS + '_FULFILLED': 
        console.log('fulf', payload)
            return {...state, products: payload, loading: false}
        case GET_PRODUCTS + '_PENDING': 
        console.log('we are pending')
            return {...state, loading: true}
        case GET_PRODUCTS + '_REJECTED':
            console.log('we were rejected') 
            return {...state, loading: false}
        
        default:
             return state; 
    }
}