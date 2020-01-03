require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
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

     


