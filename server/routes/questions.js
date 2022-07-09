const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here
  router.get("/", (req, res) => {
    const command = "SELECT * FROM questions";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/new", (req, res)=> {
    const { question } = req.body;
  })

  return router;
};