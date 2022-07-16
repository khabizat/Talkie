const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM tags`)
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  router.get("/:tagId/questions", (req, res) => {
    const { tagId } = req.params;

    db.query(
      `SELECT questions.id as id, questions.name as name, 
      questions.date as date, questions.user_id as user_id, 
      questions.tag_id as tag_id, users.name as user_name,
      tags.name as tag_name
      FROM questions 
      JOIN users
      ON users.id = questions.user_id
      JOIN tags
      ON questions.tag_id = tags.id
      WHERE tag_id = $1
      ORDER BY date DESC;`,
      [tagId]
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
