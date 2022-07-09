const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here
  router.get("/", (req, res) => {
    const command = "SELECT * FROM questions";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/", (req, res)=> {
    const { question, tag } = req.body;
    
    db.query(`INSERT INTO questions (name, tag_id) VALUES ($1, $2)`, [question, tag])
    .then((response) => {
      return res.json(response); 
    });
  })

  return router;
};