const router = require("express").Router();
const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

router.get("/", async (req, res) => {
  try {
    const students = await db("students");
    res.status(200).json(students);
  } catch (e) {
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await db
      .select("*")
      .from("students")
      .where({ id: req.params.id });

    //.innerJoin("cohorts", "students.cohort_id", "cohorts.id");

    res.status(200).json(student);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newStudent = await db("students").insert(req.body);
    res.status(201).json(newStudent);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newStudent = await db("students")
      .where({ id: req.params.id })
      .update(req.body);
    res.status(200).json(newStudent);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const newStudent = await db("students")
      .where({ id: req.params.id })
      .del();
    res.status(200).json(newStudent);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

module.exports = router;
