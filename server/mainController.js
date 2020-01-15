
module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db'); 
        db.get_products().then(products => {res.status(200).send(products)}).catch(err => res.status(500).send(err))
    },
    addToCart: (req, res) => {
        const {product_id} = req.body; 
        const db = req.app.get('db'); 
        db.order.add_cart(product_id)
        .then(res => res.sendStatus(200))
        .catch(err => res.status(500).send(err)); 
    },
    getCart: (req, res) => {
        const db = req.app.get('db'); 
        db.order.get_cart().then(cart => {
            res.status(200).send(cart)
        })
        .catch(err => res.status(500).send(err))
    },
    emptyCart:( req, res) => {
        const db = req.app.get('db'); 
        db.order.clear_cart().then(cart => {
            res.status(200).send(cart)
        })
        .catch(err => res.status(500).send(err))
    }
}