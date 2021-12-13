const express = require('express');
const router = express.Router();
const db = require('../models');
const { Job } = db;


router.get('/', (req,res) => {
  Job.findAll({})
    .then(jobs => res.json(jobs));
});

router.post('/', (req, res) => {
  let {jobname} = req.body;
  Job.create({jobname})
    .then(job => {
      res.status(201).json(job);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
module.exports = router;