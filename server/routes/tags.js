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

    db.query(`SELECT * FROM questions WHERE tag_id = $1`, [tagId])
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return router;
};
