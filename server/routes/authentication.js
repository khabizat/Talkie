const router = require("express").Router();

const userData = require("../db/mockdata");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const userFound = userData.filter((user) => user.email === email);
  if (!userFound.length) {
    return res.status(403).send("invaild credentials");
  }
  if (userFound[0].password !== password) {
    return res.status(403).send("invaild credentials");
  }
  res.json(userFound);
});

module.exports = router;
