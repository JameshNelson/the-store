import React, {Component} from 'react'; 
import {getProducts} from '../../redux/productsReducer'; 
import {connect} from 'react-redux'; 

class ProductCard extends Component {
    constructor(props) {
        super(props); 
        this.state = { products: []}
    }

    componentDidMount(){
        this.props.getProducts()
    }

    render(){
        console.log('dashboard props', this.props.products.products)
            const products = this.props.products.products.map((product, i) => {
            return(
                <div key={i} className='product-card'>
                    <img src={product.product_image} className='product-image'/>
                    <div className='product-info'>
                        <p>{product.product_name}</p>
                        <p>Price: ${product.price}</p>
                        <p></p>
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
    console.log(reduxState)
    return {products: reduxState.products}; 
}

export default connect(mapStateToProps, {getProducts})(ProductCard);