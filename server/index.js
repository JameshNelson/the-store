require('dotenv').config();
const express = require('express'),
      path = require('path'); 
      massive = require('massive'),
      session = require('express-session'),
      stripe = require('stripe')(process.env.STRIPE_SECRET),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_SECRET} = process.env,
      authCtrl = require('./authController'),
      mainCtrl = require('./mainController'),
      app = express();

app.use(express.json()); 

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("DB")
    const port = SERVER_PORT;
    app.listen(port, () => console.log(`something something ${port}`))
})

//auth endpoints
app.post('/auth/login', authCtrl.login); 
app.post('/auth/register', authCtrl.register); 
app.post('/auth/logout', authCtrl.logout); 
//auth endpoints

app.get('/api/products', mainCtrl.getProducts); 
app.post('/api/cart', mainCtrl.addToCart); 


//Stripe
app.post("/api/payment", async (req, res) => {
    const {token:{id},amount} = req.body;
    try {
      let status = await stripe.charges.create({

        amount: amount,
        currency: "usd",
        description: "An example charge",
        source: id
      });
  
      res.status(200).send(status);
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

//Stripe
     
app.use( express.static( `${__dirname}/../build` )); 

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});