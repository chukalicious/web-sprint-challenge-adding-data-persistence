// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

const Projects = require("./model");

router.get(`/`, (req, res) => {
  Projects.get()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => res.status(500).json({ message: "server error" }));
});

module.exports = router;
