const router = require("express").Router();

module.exports = (db) => {
  router.get("/:answerId", (req, res) => {
    const { answerId } = req.params;
    db.query(
      `SELECT 
      comments.id as comment_id,
      comments.comment as comment,
      TO_CHAR(comments.date, 'fmDay, fmMon DDth YYYY') as date,
      comments.name as name,
      comments.user_id as user_id,
      comments.answer_id as answer_id,
      answers.audio_url as audio_url
      FROM answers 
      JOIN comments
      ON answers.id = comments.answer_id
      WHERE answers.id = $1
      ORDER BY comments.date ASC;`,
      [answerId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  router.get("/user/:userId", (req, res) => {
    const { userId } = req.params;
    db.query(
      `SELECT answers.audio_url as answer_audio,
      answers.date as date,
      questions.name as question_name,
      tags.name as tag_name
      FROM answers
      JOIN questions
      ON answers.question_id = questions.id
      JOIN tags
      ON questions.tag_id = tags.id
      WHERE answers.user_id = $1;`,
      [userId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        console.log(err);
        return res.json(err);
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
