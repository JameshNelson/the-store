import React, {Component} from 'react'; 
import {Elements, StripeProvider} from 'react-stripe-elements'; 
import CheckoutForm from '../Stripe/CheckoutForm'
import { connect } from 'react-redux';
import {getCart} from '../../redux/productsReducer'; 

class Cart extends Component {
    constructor(){
        super()
        this.state = {
            total: 0
        }
    }


    componentDidMount(){
        this.props.getCart()
    }

    render(){

        
        const products = this.props.products.products.map((product, i) => {
            return(

                <div key={i} className='product-card'>
                    <img src={product.product_image} className='product-image'/>
                    <div className='product-info'>
                        <p>{product.product_name}</p>
                        <p>Price: ${product.price}</p>
                        <button>Remove from Cart</button>
                    </div>
                </div>
            )
        }) 
        let total = this.props.products.products.map((el) => {
            return el.price
        }).reduce((acc, cur) => {
            return +acc + +cur 
        }, 0).toFixed(2)
        console.log('This is total',total); 
        return(
            <div>
                <div className='cart-body'>
                    {this.props.products.products.length ? products : null}
                </div> 
                <StripeProvider apiKey="pk_test_zpRONBjxlVGJMjgVWn0iIBIm">
                     <div className="example">
                        <h1></h1>
                        <Elements>
                            <CheckoutForm amount={total} />
                        </Elements>
                    </div>
                </StripeProvider>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log('This is sparta', reduxState.products.products)
    return{products: reduxState.products}
}

export default connect(mapStateToProps, {getCart})(Cart);