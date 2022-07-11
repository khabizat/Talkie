const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM questions";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/", (req, res) => {
    const { question, tag } = req.body;

    db.query(`INSERT INTO questions (name, tag_id) VALUES ($1, $2)`, [
      question,
      tag,
    ]).then((response) => {
      return res.json(response);
    });
  });

  router.get("/:questionId", (req, res) => {
    const { questionId } = req.params;

    const queryString = `
    SELECT answers.id as answer_id, answers.audio_url as audio_url, questions.tag_id as tag_id, questions.name as name, answers.date as date 
    FROM questions 
    JOIN answers 
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

  return router;
};
