import React, {Component} from 'react'; 
import {Elements, StripeProvider} from 'react-stripe-elements'; 
import CheckoutForm from '../Stripe/CheckoutForm'

class Cart extends Component {

    render(){
        return(
            <div>
                <StripeProvider apiKey="pk_test_zpRONBjxlVGJMjgVWn0iIBIm">
                     <div className="example">
                        <h1>React Stripe Elements Example</h1>
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </StripeProvider>
            </div>
        )
    }
}

export default Cart;