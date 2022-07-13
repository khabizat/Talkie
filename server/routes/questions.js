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
    SELECT answers.id as answer_id, answers.audio_url as audio_url, questions.tag_id as tag_id, questions.name as name, answers.date as date 
    FROM questions 
    LEFT JOIN answers 
    ON answers.question_id = questions.id 
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

  return router;
};
