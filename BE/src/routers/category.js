const express = require('express');
const User = require('../model/user');
const cinema = require('../model/cinema');
const cineplex = require('../model/cineplex');
const premiere = require('../model/premiere');
const movie = require('../model/movie');
const booking = require('../model/booking');

const router = express.Router();
const fs = require('fs');
const upload = require('../../upload/upload');
const Promise = require('bluebird');
Promise.promisifyAll(fs);
const path = require('path');

const cpUpload = upload.fields([{ name: 'anhphim', maxCount: 1 }]);

router.post('/upload', cpUpload, async (req, res) => {
    let anhSave = req.files['anhphim'][0].originalname;
    let anhUpload = req.files['anhphim'][0].filename;
    const {Ten,NgayCongChieu,TraiLers,ThoiLuong,DaoDien,DienVien,TheLoai, } = req.body;
    const sourcePath_avatar = path.join(__dirname,'..','..','uploads',anhUpload, );
    const destPath = path.join(__dirname,'..','..','public','images','news',anhSave,);
    await fs.renameAsync(sourcePath_avatar, destPath);
    const movies = await movie.create({
        Ten,
        NgayCongChieu,
        Poster: anhSave,
        TraiLers,
        ThoiLuong,
        DaoDien,
        DienVien,
        TheLoai,
    });
    res.redirect('/admin/movie')
});

router.post('/deletemovies/:id', async function (req, res) {
    await movie.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.redirect('/admin/movie')
});

router.post('/insertcineplex', async function (req, res, next) {
    await cineplex.create({
        TenCum: req.body.TenCum,
        DiaChi: req.body.DiaChi,
        Maps: req.body.Maps,
    });
    res.redirect('/admin/cineplex');
});

router.post('/deletecineplex/:id', async function (req, res) {
    await cineplex.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.redirect('/admin/cineplex');
});

router.post('/insertcinema', async function (req, res, next) {
    await cinema.create({
        TenRap: req.body.TenRap,
        LoaiRap: req.body.LoaiRap,
        KTNgang: req.body.KTNgang,
        KTDoc: req.body.KTDoc,
    });
    res.redirect('/admin/cinema');
});

router.post('/deletecinema/:id', async function (req, res) {
    await cinema.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.redirect('/admin/cinema');
});

router.post('/insertpremiere', async function (req, res, next) {
    await premiere.create({
        ThoiDiemBatDau: req.body.TDBD,
        ThoiDiemKetThuc: req.body.TDKT,
        GiaVe: req.body.GiaVe,
        PhimId: req.body.idphim,
        RapId: req.body.idrap,
    });
    res.redirect('/admin/premiere');
});

router.post('/deletepremiere/:id', async function (req, res) {
    await premiere.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.redirect('/admin/premiere');
});

router.get('/statistics', async function (req, res) {
    await booking.findAll({
            include: [
                {
                    model: premiere,
                    include: [
                        {
                            model: cinema,
                            include: [
                                {
                                    model: cineplex,
                                },
                            ],
                        },
                    ],
                },
            ],
        })
        .then((user) => {
            res.json({ user });
        });
});
module.exports = router;
