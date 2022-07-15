const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM liked`)
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  router.post("/", (req, res) => {
    const { userId, question_name, tag_name } = req.body;

    db.query(
      `INSERT INTO liked (user_id, question_name, tag_name)
      VALUES ($1, $2, $3) RETURNING *;`,
      [userId, question_name, tag_name]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        return res.json(err);
      });
  });

  router.get("/user/:userId", (req, res) => {
    const { userId } = req.params;

    db.query(`SELECT * FROM liked WHERE user_id = $1`, [userId])
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return router;
};
