const router = require("express").Router();

module.exports = (db) => {
  router.get("/:answerId", (req, res) => {
    const { answerId } = req.params;
    console.log(req.params);
    db.query(
      `SELECT * FROM answers 
      JOIN comments
      ON answers.id = comments.answer_id
      WHERE answers.id = $1;`,
      [answerId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return router;
};
