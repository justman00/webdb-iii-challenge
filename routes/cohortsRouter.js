const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cohorts = await db("cohorts");
    res.status(200).json(cohorts);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cohorts = await db("cohorts").where({ id: req.params.id });
    res.status(200).json(cohorts);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.get("/:id/students", async (req, res) => {
  try {
    const studens = await db("students").where({ cohort_id: req.params.id });
    res.status(200).json(studens);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCohort = await db("cohorts").insert(req.body);
    res.status(201).json(newCohort);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newCohort = await db("cohorts")
      .where({ id: req.params.id })
      .update(req.body);
    res.status(200).json(newCohort);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const newCohort = await db("cohorts")
      .where({ id: req.params.id })
      .del();
    res.status(200).json(newCohort);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

module.exports = router;
