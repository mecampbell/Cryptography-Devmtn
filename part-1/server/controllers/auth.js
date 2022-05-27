const bcrypt = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const authenticated = bcrypt.compareSync(password, users[i].passwordHash);
          if (authenticated) {
            let userToReturn = {...users[i]};
            delete userToReturn.passwordHash;
            res.status(200).send(users[i]);
            return;
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { username, email, firstName, lastName, password, } = req.body;
        let salt = bcrypt.genSaltSync(5);
        let passwordHash = bcrypt.hashSync(password, salt);
        let user = { username, email, firstName, lastName, passwordHash };   
        users.push(user);
        let userToReturn = {...user};
        delete userToReturn.passwordHash;
        res.status(200).send(req.body);
    }
};