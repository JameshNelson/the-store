import React, {Component} from 'react'; 
import {getProducts} from '../../redux/productsReducer'; 
import {connect} from 'react-redux'; 
import ProductCard from './ProductCard'; 

class Dash extends Component {
    constructor(props) {
        super(props); 
        this.state = { products: []}
    }

    componentDidMount(){
        this.props.getProducts()
    }

    render(){
        // console.log('dashboard props', this.props.products.products)
        //     const products = this.props.products.products.map((product, i) => {
        //     return(
        //         <div key={i}>
        //             <img src={product.product_image} className='product-image'/>
        //             <p>{product.product_name}</p>
        //             <p>Price ${product.price}</p>
        //             <p></p>
        //         </div>
        //     )
        // })
        return(
            
            <div className='dashboard-body'>
                
                <ProductCard />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log(reduxState)
    return {products: reduxState.products}; 
}

export default connect(mapStateToProps, {getProducts})(Dash);