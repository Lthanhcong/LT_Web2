const express = require('express');
const movie = require('../model/movie');
const moment = require('moment');

const router = express.Router();

router.get("/", async function (req, res) {
    const phimMoiDuocChieu = await movie.findAll({
      limit: 4,
      order: [
        ['createdAt', 'ASC']
      ]
    })
    const phim = await movie.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['NgayCongChieu', 'DESC']
      ]
    })
    res.render('index', {phimMoiDuocChieu, phim, moment});
  });
  
  router.post('/thongke', async function (req, res) {
    const to = req.body.to
    const go = req.body.go
    res.redirect('/admin/suatchieu');
  });
  
  router.get("*", async function (req, res) {
    res.redirect("/");
  })
  
  module.exports = router;
  