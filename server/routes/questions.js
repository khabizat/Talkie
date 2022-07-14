const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM questions";
    db.query(command).then((response) => {
      res.json(response.rows);
    });
  });

  router.post("/", (req, res) => {
    const { question, tag, userId } = req.body;

    db.query(
      `INSERT INTO questions (name, tag_id, user_id) VALUES ($1, $2, $3)`,
      [question, tag, userId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        console.log("query ERROR");
        return res.json(err);
      });
  });

  router.get("/:questionId", (req, res) => {
    const { questionId } = req.params;

    const queryString = `
    SELECT answers.id as answer_id, 
    answers.audio_url as audio_url, answers.date as date,
    questions.tag_id as tag_id, questions.name as name, 
    users.name as user_name
    FROM questions 
    LEFT JOIN answers 
    ON answers.question_id = questions.id 
    JOIN users
    ON users.id = answers.user_id
    WHERE questions.id = $1`;

    db.query(queryString, [questionId])
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        console.log("query ERROR");
        return res.json(err);
      });
  });

  router.get("/:tagId", (req, res) => {
    const { tagId } = req.params;
    db.query(`SELECT * FROM questions WHERE tag_id = $1`, [tagId])
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });

  router.delete("/:questionId", (req, res) => {
    const { questionId } = req.params;
    db.query(
      `DELETE FROM questions
      WHERE id = $1
      RETURNING *;
      `,
      [questionId]
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
