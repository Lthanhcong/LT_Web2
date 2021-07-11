const asyncHandler = require('express-async-handler');
const express = require('express');
const Movie = require('../model/movie');
const Cinema = require('../model/cinema');
const Cineplex = require('../model/cineplex');
const Premiere = require('../model/premiere');
const Booking = require('../model/booking');
const Ticket = require('../model/ticket');
const User = require('../model/user');

const moment = require('moment');

const router = express.Router();

//phim moi duoc cong chieu
router.get('/movie', async (req, res) => {
    //tất cả các phim
    const movie = await Movie.findAll({
        // limit: 4 ,
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['createdAt', 'ASC'],
        ],
    });
    res.json({ movie, moment });
});
router.get('/cinema', async (req, res) => {
    const { id } = req.query;
    const cineplex = await Cineplex.findAll();
    const cinema = await Cinema.findAll();
    const premiere = await Premiere.findAll({
        where: {
            PhimId: id,
        },
        include: [
            {
                model: Cinema,

                include: [
                    {
                        model: Cineplex,
                    },
                ],
            },
        ],
    });
    const premiere_ = await Premiere.findAll({
        where: {
            PhimId: id,
        },
    });
    const premiere__ = await Premiere.findAll({
        where: {
            PhimId: id,
        },
        include: [
            {
                model: Cinema,
            },
        ],
    });
    // res.json(suatchieu__)
    res.json({ premiere, cineplex, cinema, premiere_, premiere__ });
});

router.get('/chair', async function (req, res) {
    const { IDSuatChieu } = req.query;
    const { userId } = req.session;
    const { IDRap } = req.query;

    if (!userId) {
        return res.redirect('/auth/login')
    }

    /**
     * @Mục_đích_lấy_ra_các_suất_chiếu_đã_đặt_thay_đổi_màu
     * @join_Vé_với_Đặt_chỗ_ứng_với_Suất_chiếu
     */

    await Ticket.findAll({
        include: [
            {
                model: Booking,
                where: {
                    SuatChieuId: IDSuatChieu,
                },
            },
        ],
    }).then((ticket) => {
        if (ticket) {
            Cinema.findOne({
                where: {
                    id: IDRap,
                },
            }).then((cinema) => {
                let arr_Chair = [];
                ticket.map((item) => {
                    arr_Chair.push(item.MaGhe);
                });
                res.json({ cinema, IDSuatChieu, userId, arr_Chair });
            });
        } else {
            Cinema.findOne({
                where: {
                    id: IDRap,
                },
            }).then((cinema) => {
                let arr_Chair = [];
                ticket.map((item) => {
                    arr_Chair.push(item.MaGhe);
                });
                res.json({ cinema, IDSuatChieu, userId, arr_Chair });
            });
        }
    });
});


router.get('/success', (req, res) => {
    res.send('')
  })
  
  router.get('/thatbai', (req, res) => {
    res.render('category/alert_fail')
  })

router.post('/book-chair', async (req, res) => {
    const { idsuatchieu } = req.query;

    let { userId } = req.session;
    let names = req.body;

    await Premiere.findOne({
        where: {
            id: idsuatchieu,
        },
    }).then((premiere) => {
        let TienVe = premiere.GiaVe; //Tiền Vé
        let TongTien = 0; //Tổng Tiền
        let lstGheDat = Object.values(names);
        let lstTinhTongTien = Object.values(names);
        /**
         * @Tính_Tổng_Tiền
         */
        if (
            typeof lstGheDat != 'undefined' &&
            lstGheDat != null &&
            lstGheDat.length != null &&
            lstGheDat.length > 0 &&
            lstGheDat.length < 8 &&
            typeof lstTinhTongTien != 'undefined' &&
            lstTinhTongTien != null &&
            lstTinhTongTien.length != null &&
            lstTinhTongTien.length > 0 &&
            lstTinhTongTien.length < 8
        ) {
            lstTinhTongTien.map((item) => {
                TongTien += TienVe;
            });
            Booking.create({
                TongTien,
                UserId: userId,
                SuatChieuId: idsuatchieu,
            }).then((booking) => {
                var arr_Chair = [];
                var arr_KhongTrung = [];
                lstGheDat.map((item) => {
                    let MaGhe = item.split('/')[0] + item.split('/')[1];
                    let DiaChiNgang = item.split('/')[0];
                    let DiaChiDoc = item.split('/')[1];
                    arr_Chair.push(MaGhe);
                    arr_KhongTrung.push(MaGhe);
                });

                Ticket.findAll({
                    include: [
                        {
                            model: Booking,
                            where: {
                                SuatChieuId: idsuatchieu,
                            },
                        },
                    ],
                }).then((ticket) => {
                    /**
                     * @Kiểm_tra_ghế_ứng_với_suất_chiếu_đã_đặt_chưa
                     * @Đã_có_người_đặt_ứng_với_Suất_Chiếu
                     */
                    if (
                        typeof ticket != 'undefined' &&
                        ticket != null &&
                        ticket.length != null &&
                        ticket.length > 0
                    ) {
                        /**
                         * @So_sánh_vé_đặt_với_các_ghế_ứng_với_suất_chiếu_nếu_trùng_thì_xóa_ghế_và
                         * @Insert_các_ghế_không_trùng_vào_CSDL
                         */
                        let Ghe_trung = [];
                        ve.map((item) => {
                            if (arr_Chair.includes(item.MaGhe)) {
                                Ghe_trung.push(item.MaGhe);
                            }
                        });
                        arr_Chair.map((item) => {
                            let MaGhe =
                                item.substring(0, 1) +
                                item.substring(1, item.length);
                            let DiaChiNgang = item.substring(0, 1);
                            let DiaChiDoc = item.substring(1, item.length);

                            Ticket.create({
                                MaGhe,
                                DiaChiNgang,
                                DiaChiDoc,
                                GiaTien: TienVe,
                                DatChoMaDatCho: datcho_.MaDatCho,
                            }).then((ticket) => {
                                // let arr_GheKhongTrung = []
                                if (
                                    Ghe_trung.includes(ticket.dataValues.MaGhe)
                                ) {
                                    Ticket.destroy({
                                        where: {
                                            MaVe: ticket.dataValues.MaVe,
                                        },
                                    });
                                    Booking.destroy({
                                        where: {
                                            MaDatCho:
                                                ticket.dataValues
                                                    .DatChoMaDatCho,
                                        },
                                    });
                                    res.send('failure');
                                    /**
                                     * @Xóa_Mã_đặt_chỗ_đã_bị_trùng
                                     */
                                } else {
                                    if (
                                        Ghe_trung.length > 0 &&
                                        Ghe_trung.indexOf(
                                            ticket.dataValues.MaGhe,
                                        ) === -1
                                    ) {
                                        //Xoa - Ve  Xoa- DatCho
                                        Booking.destroy({
                                            where: {
                                                MaDatCho:
                                                    ticket.dataValues
                                                        .DatChoMaDatCho,
                                            },
                                        });
                                        Ticket.destroy({
                                            where: {
                                                MaVe: ticket.dataValues.MaVe,
                                            },
                                        });
                                        res.send('failure');
                                    }

                                    /**
                                     * @Xóa_thông_tin_các_vé_không_trùng_còn_lại
                                     */

                                    /**
                                     * @Lấy_các_Thông_tin_ứng_mã_đặt_chỗ_để_gửi_cho_khách_hàng
                                     */

                                    Ticket.findAll({
                                        where: {
                                            DatChoMaDatCho:
                                                ticket.dataValues
                                                    .DatChoMaDatCho,
                                        },
                                        include: [
                                            {
                                                model: Booking,
                                                where: {
                                                    SuatChieuId: idsuatchieu,
                                                },
                                                include: [
                                                    {
                                                        model: User,
                                                    },
                                                    {
                                                        model: Premiere,
                                                        include: [
                                                            {
                                                                model: Movie,
                                                            },
                                                            {
                                                                model: Cinema,
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    }).then((ticket) => {
                                        ticket.map((item) => {
                                            const {
                                                sendMailBookingTicket,
                                            } = require('../services/Email/email.controller');
                                            let Email = item.Booking.User.Email;
                                            let MaVe = item.MaVe;
                                            let MaGhe = item.MaGhe;
                                            let TenRap =
                                                item.Booking.Premiere.Cinema
                                                    .TenRap;
                                            let Ten =
                                                item.Booking.Premiere.Movie.Ten;
                                            let ThoiDiemBatDau =
                                                item.Booking.Premiere
                                                    .ThoiDiemBatDau;
                                            let GiaVe =
                                                item.Booking.premiere.GiaVe;

                                            sendMailBookingTicket(
                                                Email,
                                                MaVe,
                                                MaGhe,
                                                TenRap,
                                                Ten,
                                                ThoiDiemBatDau,
                                                GiaVe,
                                            );
                                        });
                                    });
                                    res.send('success');
                                }
                            });
                        });
                    } else {
                        /**
                         * @Suất_chiếu_khi_Chưa_có_người_đặt
                         */
                        arr_Chair.map((item) => {
                            let MaGhe =
                                item.substring(0, 1) +
                                item.substring(1, item.length);
                            let DiaChiNgang = item.substring(0, 1);
                            let DiaChiDoc = item.substring(1, item.length);

                            Ticket.create({
                                MaGhe,
                                DiaChiNgang,
                                DiaChiDoc,
                                GiaTien: TienVe,
                                DatChoMaDatCho: datcho_.MaDatCho,
                            }).then((ve) => {
                                Ticket.findAll({
                                    where: {
                                        DatChoMaDatCho: datcho_.MaDatCho,
                                    },
                                    include: [
                                        {
                                            model: Booking,
                                            where: {
                                                SuatChieuId: idsuatchieu,
                                            },
                                            include: [
                                                {
                                                    model: User,
                                                },
                                                {
                                                    model: Premiere,
                                                    include: [
                                                        {
                                                            model: Movie,
                                                        },
                                                        {
                                                            model: Cinema,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                }).then((ticket) => {
                                    ticket.map((item) => {
                                        const {
                                            sendMailBookingTicket,
                                        } = require('../services/Email/email.controller');

                                        let Email = item.Booking.User.Email;
                                        let MaVe = item.MaVe;
                                        let MaGhe = item.MaGhe;
                                        let TenRap =
                                            item.Booking.Premiere.Cinema.TenRap;
                                        let Ten =
                                            item.Booking.Premiere.Movie.Ten;
                                        let ThoiDiemBatDau =
                                            item.Booking.Premiere
                                                .ThoiDiemBatDau;
                                        let GiaVe = item.Booking.premiere.GiaVe;
                                        let MaDatCho = item.DatChoMaDatCho;

                                        sendMailBookingTicket(
                                            Email,
                                            MaVe,
                                            MaGhe,
                                            TenRap,
                                            Ten,
                                            ThoiDiemBatDau,
                                            GiaVe,
                                        );
                                    });
                                });
                                res.send('success');
                            });
                        });
                    }
                });
            });
        } else {
            // const link = `/category/ghe?IDRap=${userId}&IDSuatChieu=${IDSuatChieu}`
            // res.redirect(`${link}`)
            res.json({ userId, idsuatchieu });
        }
    });
});

/**
 * @Xóa_Đặt_Chỗ
 */

router.get('/delete/:MaDatCho', async (req, res) => {
    const { MaDatCho } = req.params;
    await Booking.destroy({
        where: {
            MaDatCho,
        },
    }).then((ma) => {
        res.json(ma);
    });
});

router.get('/delete-ticket/:MaVe', async (req, res) => {
    const { MaVe } = req.params;
    await Ticket.destroy({
        where: {
            MaVe,
        },
    }).then((ma) => {
        res.json(ma);
    });
});

router.get('/premiere', async function (req, res) {
    res.json(
        
    );
});

router.get('/detailmovie', async function (req, res) {
    res.json( {movie});
});

router.get('/chair', async function (req, res) {
    res.json({
        
    });
});

router.get('/trailer', async function (req, res, next) {
    const { id } = req.query;
    Movie.findOne({
        where: {
            id: id,
        },
    })
        .then(function (movies) {
            res.json({ movies });
        })
        .catch(next);
});

/**
 * @Lay_Ra_Ghe_Thuoc_Rap_Theo_ID
 */

router.get('/trailer', async function (req, res) {
    const { trailer, ten, daodien, dienvien } = req.query;
    res.json({ trailer, ten, daodien, dienvien });
});

router.get('/detailcinema', async function (req, res, next) {
    const { id } = req.query;
    Cineplex.findOne({
        where: {
            id: id,
        },
    })
        .then(function (cineplexs) {
            res.json({ cineplexs });
        })
        .catch(next);
});

router.get('/404', (req, res) => {
    res.send('404');
});

router.get('/history', async (req, res) => {
    // const {userId} = req.session.userId
    const { userId } = req.query;
    // const { userId } = req.session
    await Ticket.findAll({
        include: [
            {
                model: Booking,
                where: {
                    UserId: userId,
                },
                include: [
                    {
                        model: Premiere,

                        include: [
                            {
                                model: Movie,
                            },
                            {
                                model: Cinema,
                                include: [
                                    {
                                        model: Cineplex,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }).then((user) => {
        res.json(user);
    });
});

module.exports = router;
