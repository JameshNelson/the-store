require('dotenv').config();
const express = require('express'),
      path = require('path'); 
      massive = require('massive'),
      session = require('express-session'),
      stripe = require('stripe')('sk_test_zSZ6vxAjKpUA3mFA8ra2q0Y2'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./authController'),
      mainCtrl = require('./mainController'),
      app = express();

app.use(express.json()); 

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

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
app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

//Stripe
     


