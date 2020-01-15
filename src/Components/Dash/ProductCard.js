import React, {Component} from 'react'; 
import {getProducts} from '../../redux/productsReducer'; 
import {connect} from 'react-redux'; 
import axios from 'axios'; 

class ProductCard extends Component {
    constructor(props) {
        super(props); 
        this.state = { products: []}
    }

    componentDidMount(){
        this.props.getProducts()
    }

    addToCart = (id) => {
        console.log("product id",id)
        axios.put(`/api/cart/:${id}`, {
            product_id: id
        }).then( res => {
            window.alert('Added to Cart')
        }).catch(err => console.log(err))
    }

    render(){
        console.log('dashboard props', this.props.products.products)
        console.log('user info', this.props)
            const products = this.props.products.products.map((product, i) => {
            return(
                <div key={i} className='product-card'>
                    <img src={product.product_image} className='product-image'/>
                    <div className='product-info'>
                        <p>{product.product_name}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => this.addToCart(product.product_id)}>Add to Cart</button>
                    </div>
                </div>
            )
        })
        return(
            
            <div className="product-holder">
                
                {products}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log("This is state", reduxState)
    return {products: reduxState.products}; 
}

export default connect(mapStateToProps, {getProducts})(ProductCard);