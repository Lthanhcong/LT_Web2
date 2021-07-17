const express = require('express');
const cinema = require('../model/cinema');
const cineplex = require('../model/cineplex');
const premiere = require('../model/premiere');
const movie = require('../model/movie');
const booking = require('../model/booking');

var router = express.Router();

var upload = require('../../upload/upload');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var path = require('path');
const Cinema = require('../model/cinema');

var cpUpload = upload.fields([{name: 'anhphim', maxCount: 1}])

router.post('/upload', cpUpload, async (req, res) => {

  let anhSave = req.files['anhphim'][0].originalname
  let anhUpload = req.files['anhphim'][0].filename
  const {Ten, NgayCongChieu, TraiLers, ThoiLuong, DaoDien, DienVien, TheLoai} = req.body
  const sourcePath_avatar = path.join(__dirname, '..', '..', 'uploads', anhUpload);
  const destPath = path.join(__dirname, '..', '..', 'public', 'images', 'news', anhSave)
  await fs.renameAsync(sourcePath_avatar, destPath)
  const movie = await movie.create({
    Ten,
    NgayCongChieu,
    Poster: anhSave,
    TraiLers,
    ThoiLuong,
    DaoDien,
    DienVien,
    TheLoai
  })
  res.redirect('/admin/phim')
})

router.post('/deletephim/:id', async function (req, res) {
  await movie.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.redirect('/admin/phim');
});

router.post('/insertcumrap', async function (req, res, next) {
  await cineplex.create({
    TenCum: req.body.TenCum,
    DiaChi: req.body.DiaChi,
    Maps: req.body.Maps
  });
  res.redirect('/admin/cumrap');
});

router.post('/deletecumrap/:id', async function (req, res) {
  await cineplex.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.redirect('/admin/cumrap');
});

router.post('/insertrap', async function (req, res, next) {
  await Cinema.create({
    TenRap: req.body.TenRap,
    LoaiRap: req.body.LoaiRap,
    KTNgang: req.body.KTNgang,
    KTDoc: req.body.KTDoc,
  });
  res.redirect('/admin/rap');
});

router.post('/deleterap/:id', async function (req, res) {
  await cinema.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.redirect('/admin/rap');
});

router.post('/insertsuatchieu', async function (req, res, next) {
  await premiere.create({
    ThoiDiemBatDau: req.body.TDBD,
    ThoiDiemKetThuc: req.body.TDKT,
    GiaVe: req.body.GiaVe,
    PhimId: req.body.idphim,
    RapId: req.body.idrap,
  });
  res.redirect('/admin/suatchieu');
});

router.post('/deletesuatchieu/:id', async function (req, res) {
  await premiere.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.redirect('/admin/suatchieu');
});

router.get('/thongke', async function (req, res) {
  await booking.findAll({

    include: [{
      model: premiere,
      include: [{
        model: Cinema,
        include: [{
          model: cineplex
        }]
      }]
    }]
  }).then(user => {
    res.render('indexadmin', {user})
  })
});
module.exports = router