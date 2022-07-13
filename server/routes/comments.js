const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM comments;").then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/", (req, res) => {
    const { userId, answerId, comment } = req.body;

    db.query(
      `INSERT INTO comments (user_id, answer_id, comment) 
    VALUES ($1, $2, $3) RETURNING *;`,
      [userId, answerId, comment]
    )
      .then((response) => {
        res.json(response.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.delete("/:commentId", (req, res) => {
    const { commentId } = req.params;
    db.query(
      `DELETE FROM comments
    WHERE id = $1
    RETURNING *;
    `,
      [commentId]
    )
      .then((response) => {
        res.json(response.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return router;
};
