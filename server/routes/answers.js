const router = require("express").Router();

module.exports = (db) => {
  router.get("/:answerId", (req, res) => {
    const { answerId } = req.params;
    db.query(
      `SELECT 
      comments.id as comment_id, comments.comment as comment, comments.timestamp as timestamp, comments.name as name, comments.user_id as user_id, comments.answer_id as answer_id, answers.audio_url as audio_url
      FROM answers 
      JOIN comments
      ON answers.id = comments.answer_id
      WHERE answers.id = $1
      ORDER BY comments.timestamp ASC;`,
      [answerId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  router.delete("/:answerId", (req, res) => {
    const { answerId } = req.params;
    db.query(
      `DELETE FROM answers
      WHERE id = $1
      RETURNING *;
      `,
      [answerId]
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
