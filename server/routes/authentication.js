const router = require("express").Router();

module.exports = (db) => {
  // confirm if typed email and password are correct
  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users;").then((data) => {
      const usersInfo = data.rows;
      const userFound = usersInfo.filter((user) => user.email === email);
      if (!userFound.length) {
        return res.status(403).send("Invalid Credentials");
      }
      if (userFound[0].password !== password) {
        return res.status(403).send("Invaild Credentials");
      }
      return res.json(userFound);
    });
  });

  // insert the data when registered
  router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    db.query(
      `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3); 
    `,
      [name, email, password]
    ).then((response) => {
      return res.json(response);
    });
  });
  return router;
};
