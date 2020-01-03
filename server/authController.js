const bcrypt = require('bcryptjs'); 

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body; 
        const db = req.app.get('db'); 
        const {session} = req; 
        
        let user = await db.customer.check_customer(email);
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10); 
        const hash = bcrypt.hashSync(password, salt); 
        let newUser = await db.customer.register_customer(email, hash);
        console.log('Hit'); 
        newUser = newUser[0]; 
        session.user = newUser; 
        res.status(201).send(session.user); 
        
    },

    login: async(req, res) => {
        const {email, password} = req.body
        const {session} = req; 
        const db = req.app.get('db'); 

        let user = await db.customer.check_customer(email);
        user = user[0]; 
        if(!user){
            return res.status(400).send('User not found')
        }
        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password; 
            session.user = user;
            res.status(202).send(session.user); 
            console.log('LOGGED!'); 
        } else {
            res.status(401).send('Wrong Password'); 
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

}