const router = require("express").Router();

module.exports = (db) => {
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

  router.get("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users;").then((data) => {
      console.log(data.rows);
      const usersInfo = data.row;
      return res.json(usersInfo);
    });
  });
  return router;
};
