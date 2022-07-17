const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT questions.id as id,
      questions.user_id as user_id,
      questions.name as name, 
      questions.date as date,
      questions.tag_id as tag_id, 
      users.name as user_name, tags.name as tag_name
      FROM questions
      JOIN users 
      ON users.id = questions.user_id
      JOIN tags
      ON questions.tag_id = tags.id
      ORDER BY questions.date DESC;`
    ).then((response) => {
      res.json(response.rows);
    });
  });

  router.post("/", (req, res) => {
    const { question, tag, userId } = req.body;

    db.query(
      `INSERT INTO questions (name, tag_id, user_id) VALUES ($1, $2, $3) RETURNING *`,
      [question, tag, userId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        return res.json(err);
      });
  });

  router.get("/:questionId", (req, res) => {
    const { questionId } = req.params;

    const queryString = `
    SELECT answers.id as answer_id,
    answers.user_id as user_id,
    answers.audio_url as audio_url,
    answers.date as date,
    questions.tag_id as tag_id,
    questions.name as name, 
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

  router.get("/user/:userId", (req, res) => {
    const { userId } = req.params;
    db.query(
      `SELECT questions.name as question_name, 
      TO_CHAR(questions.date, 'fmDay, fmMon DDth YYYY') as date,tags.name as tag_name
      FROM questions
      JOIN tags
      ON questions.tag_id = tags.id
      WHERE user_id = $1`,
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
