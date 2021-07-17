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
router.get('/phim', async (req, res) => { //tất cả các phim
    const phim = await Movie.findAll({
      // limit: 4 ,
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['createdAt', 'ASC']
      ]
    })
    // res.json(phim)
    res.render('category/phim', {phim, moment});
  });
  //phim moi duoc cong chieu
  
  //cumrap ->rap ->suatchieu
  
  router.get('/rap', async (req, res) => {
    const {id} = req.query
    const cumrap = await Cineplex.findAll()
    const rap = await Cinema.findAll()
    const suatchieu = await Premiere.findAll({
      where: {
        PhimId: id
      },
      include: [{
        model: Cinema,
  
        include: [{
          model: Cineplex
        }]
      }]
  
    })
  
    const suatchieu_ = await Premiere.findAll({
      where: {
        PhimId: id
      }
    })
    const suatchieu__ = await Premiere.findAll({
      where: {
        PhimId: id
      },
      include: [{
        model: Cinema
  
      }]
    })
    // res.json(suatchieu__)
    res.render('category/rap', {suatchieu, cumrap, rap, suatchieu_, suatchieu__})
  })
  
  /**
   * @Lấy_Ghế lấy số chiều dọc và ngang
   * chiều ngang là số chiều dọc là A B C
   * @query IDRap fetch theo rap de lay ChieuNgang
   */
  // router.get('/ghe?marap')
  router.get('/ghe', async function (req, res) {
  
    const {IDSuatChieu} = req.query
    const {userId} = req.session
    const {IDRap} = req.query
  
    if (!userId) {
      return res.redirect('/auth/login')
    }
  
    /**
     * @Mục_đích_lấy_ra_các_suất_chiếu_đã_đặt_thay_đổi_màu
     * @join_Vé_với_Đặt_chỗ_ứng_với_Suất_chiếu
     */
    await Ticket.findAll({
      include: [{
        model: DatCho,
        where: {
          SuatChieuId: IDSuatChieu
        }
      }]
    }).then(ve => {
      if (ve) {
        Cinema.findOne({
          where: {
            id: IDRap
          }
        }).then(rap => {
          let arr_Ghe = []
          ve.map(item => {
            arr_Ghe.push(item.MaGhe)
          })
          res.render('category/ghe', {rap, IDSuatChieu, userId, arr_Ghe})
        })
      } else {
        Cinema.findOne({
          where: {
            id: IDRap
          }
        }).then(rap => {
  
          let arr_Ghe = []
          ve.map(item => {
            arr_Ghe.push(item.MaGhe)
          })
          res.render('category/ghe', {rap, IDSuatChieu, userId, arr_Ghe})
        })
      }
    })
  });
  
  
  /**
   * @Truyền_IDSuatChieu  để lấy giá vé tính tổng tiền
   */
  
  /** Trong */
  
  /**
   * @Rap
   */
  
  /**
   * @Router_Đăt_Ghế router.post('/dat-ghe/:SuatChieuID', async (req, res)=>{
   */
  
  router.get('/thanhcong', (req, res) => {
    res.render('category/alert_succes')
  })
  
  router.get('/thatbai', (req, res) => {
    res.render('category/alert_fail')
  })
  
  /**
   * @Đặt_ghế
   */
  router.post('/dat-ghe', async (req, res) => {
  
    //Insert DatCho
    /**
     * @param
     * @SuatChieuID
     */
    const {idsuatchieu} = req.query
  
    let {userId} = req.session
    let names = req.body
  
    await SuatChieu.findOne({
      where: {
        id: idsuatchieu
      }
    }).then(suatchieu => {
      let TienVe = suatchieu.GiaVe //Tiền Vé
      let TongTien = 0 //Tổng Tiền
      let lstGheDat = Object.values(names)
      let lstTinhTongTien = Object.values(names)
      /**
       * @Tính_Tổng_Tiền
       */
      if (typeof lstGheDat != "undefined" && lstGheDat != null && lstGheDat.length != null && lstGheDat.length > 0 && lstGheDat.length < 8 && typeof lstTinhTongTien != "undefined" && lstTinhTongTien != null && lstTinhTongTien.length != null && lstTinhTongTien.length > 0 && lstTinhTongTien.length < 8) {
        lstTinhTongTien.map(item => {
          TongTien += TienVe
        })
        /**
         *@Object_Đặt_Chỗ
         */
  
        /**
         * @Insert_Đặt_Chỗ
         */
  
        Booking.create({
          TongTien,
          UserId: userId,
          SuatChieuId: idsuatchieu
        }).then(datcho_ => {
          var arr_Ghe = []
          var arr_KhongTrung = []
          lstGheDat.map(item => {
            let MaGhe = item.split('/')[0] + item.split('/')[1]
            let DiaChiNgang = item.split('/')[0]
            let DiaChiDoc = item.split('/')[1]
            arr_Ghe.push(MaGhe)
            arr_KhongTrung.push(MaGhe)
          })
  
          Ticket.findAll({
            include: [{
              model: Booking,
              where: {
                SuatChieuId: idsuatchieu
              }
            }]
          }).then(ve => {
  
            /**
             * @Kiểm_tra_ghế_ứng_với_suất_chiếu_đã_đặt_chưa
             */
            /**
             * @Đã_có_người_đặt_ứng_với_Suất_Chiếu
             */
            if (typeof ve != "undefined" && ve != null && ve.length != null && ve.length > 0) {
              /**
               * @So_sánh_vé_đặt_với_các_ghế_ứng_với_suất_chiếu_nếu_trùng_thì_xóa_ghế_và
               * @Insert_các_ghế_không_trùng_vào_CSDL
               */
              let Ghe_trung = []
  
              ve.map(item => {
                if (arr_Ghe.includes(item.MaGhe)) {
                  Ghe_trung.push(item.MaGhe)
                }
              })
  
              arr_Ghe.map(item => {
                let MaGhe = item.substring(0, 1) + item.substring(1, item.length)
                let DiaChiNgang = item.substring(0, 1)
                let DiaChiDoc = item.substring(1, item.length)
                // arr_Ghe.push(MaGhe)
  
                Ticket.create({
                  MaGhe,
                  DiaChiNgang,
                  DiaChiDoc,
                  GiaTien: TienVe,
                  DatChoMaDatCho: datcho_.MaDatCho
                }).then(ve => {
                  // let arr_GheKhongTrung = []
  
                  if (Ghe_trung.includes(ve.dataValues.MaGhe)) {
  
                    /**
                     * @Roll_back_Transaction
                     */
                    /**
                     * @Xóa_các_vé_trùng_Khi_Người_Dùng_Đặt
                     */
                    Ticket.destroy({
                      where: {
                        MaVe: ve.dataValues.MaVe
                      }
                    })
                    Booking.destroy({
                      where: {
                        MaDatCho: ve.dataValues.DatChoMaDatCho
                      }
                    })
                    res.redirect('/category/thatbai')
                    /**
                     * @Xóa_Mã_đặt_chỗ_đã_bị_trùng
                     */
  
                  } else {
  
                    if (Ghe_trung.length > 0 && Ghe_trung.indexOf(ve.dataValues.MaGhe) === -1) {
                      //Xoa - Ve  Xoa- DatCho
                      Booking.destroy({
                        where: {
                          MaDatCho: ve.dataValues.DatChoMaDatCho
                        }
                      })
                      Ticket.destroy({
                        where: {
                          MaVe: ve.dataValues.MaVe
                        }
                      })
                      res.redirect('/category/thatbai')
                    }
  
                    /**
                     * @Xóa_thông_tin_các_vé_không_trùng_còn_lại
                     */
  
                    /**
                     * @Lấy_các_Thông_tin_ứng_mã_đặt_chỗ_để_gửi_cho_khách_hàng
                     */
  
                    Ticket.findAll({
                      where: {
                        DatChoMaDatCho: ve.dataValues.DatChoMaDatCho
                      },
                      include: [{
                        model: Booking,
                        where: {
                          SuatChieuId: idsuatchieu,
                        },
                        include: [
                          {
                            model: User
                          },
                          {
                            model: Premiere,
                            include: [
                              {
                                model: Movie
                              },
                              {
                                model: Cinema
                              }
                            ]
                          }]
                      }]
  
                    }).then(ve => {
                      ve.map(item => {
                        const {sendMailBookingTicket} = require('../../mailer/mailer_user')
                        let Email = item.DatCho.User.Email
                        let MaVe = item.MaVe
                        let MaGhe = item.MaGhe
                        let TenRap = item.Booking.Premiere.Cinema.TenRap
                        let Ten = item.Booking.Premiere.Movie.Ten
                        let ThoiDiemBatDau = item.Booking.Premiere.ThoiDiemBatDau
                        let GiaVe = item.Booking.Premiere.GiaVe
  
                        sendMailBookingTicket(Email, MaVe, MaGhe, TenRap, Ten, ThoiDiemBatDau, GiaVe)
                      })
                    })
                    res.redirect('/category/thanhcong')
                  }
                })
              })
            } else {
              /**
               * @Suất_chiếu_khi_Chưa_có_người_đặt
               */
              arr_Ghe.map(item => {
  
                let MaGhe = item.substring(0, 1) + item.substring(1, item.length)
                let DiaChiNgang = item.substring(0, 1)
                let DiaChiDoc = item.substring(1, item.length)
  
                Ticket.create({
                  MaGhe,
                  DiaChiNgang,
                  DiaChiDoc,
                  GiaTien: TienVe,
                  DatChoMaDatCho: datcho_.MaDatCho
                }).then(ve => {
                  Ticket.findAll({
                    where: {
                      DatChoMaDatCho: datcho_.MaDatCho
                    },
                    include: [{
                      model: Booking,
                      where: {
                        SuatChieuId: idsuatchieu,
  
                      },
                      include: [
                        {
                          model: User
                        },
                        {
                          model: Premiere,
                          include: [
                            {
                              model: Movie
                            },
                            {
                              model: Cinema
                            }
                          ]
                        }]
                    }]
  
                  }).then(ve => {
                    ve.map(item => {
                      const {sendMailBookingTicket} = require('../../mailer/mailer_user')
  
                      let Email = item.Booking.User.Email
                      let MaVe = item.MaVe
                      let MaGhe = item.MaGhe
                      let TenRap = item.Booking.Premiere.Cinema.TenRap
                      let Ten = item.Booking.Premiere.Movie.Ten
                      let ThoiDiemBatDau = item.Booking.Premiere.ThoiDiemBatDau
                      let GiaVe = item.Booking.Premiere.GiaVe
                      let MaDatCho = item.DatChoMaDatCho
  
                      sendMailBookingTicket(Email, MaVe, MaGhe, TenRap, Ten, ThoiDiemBatDau, GiaVe)
                    })
  
                  })
                  res.redirect('/category/thanhcong')
                })
  
                /**
                 * @Gửi_mail_thông_tin_mail
                 * _mave, _maghe,  _tenrap, _tenphim, _thoidiembatdau,_giatien
                 */
                // res.redirect('/category/thanhcong')
  
              })
            }
          })
        })
      } else {
        // const link = `/category/ghe?IDRap=${userId}&IDSuatChieu=${IDSuatChieu}`
        // res.redirect(`${link}`)
        res.render('category/alert_fail', {userId, idsuatchieu})
      }
    })
  })
  
  
  /**
   * @Xóa_Đặt_Chỗ
   */
  router.get('/delete/:MaDatCho', async (req, res) => {
    const {MaDatCho} = req.params
    await Booking.destroy({
      where: {
        MaDatCho
      }
    }).then(ma => {
      res.json(ma)
    })
  })
  
  router.get('/delete-ve/:MaVe', async (req, res) => {
    const {MaVe} = req.params
    await Ticket.destroy({
      where: {
        MaVe
      }
    }).then(ma => {
      res.json(ma)
    })
  })
  
  router.get('/suatchieu', async function (req, res) {
    res.render('category/suatchieu');
  });
  
  router.get('/detailphim', async function (req, res) {
    res.render('category/detailphim');
  });
  
  router.get('/ghe', async function (req, res) {
    res.render('category/ghe');
  });
  
  router.get('/trailer', async function (req, res, next) {
    const {id} = req.query
    Movie.findOne({
      where: {
        id: id
      }
    }).then(function (phims) {
      res.render('category/trailer', {phims});
    }).catch(next);
  });
  
  
  /**
   * @Lay_Ra_Ghe_Thuoc_Rap_Theo_ID
   */
  
  router.get('/suatchieu', async function (req, res) {
    res.render('category/suatchieu');
  });
  
  router.get('/detailphim', async function (req, res) {
    res.render('category/detailphim');
  });
  
  router.get('/trailer', async function (req, res) {
    const {trailer, ten, daodien, dienvien} = req.query
    res.render('category/trailer', {trailer, ten, daodien, dienvien});
  });
  
  router.get('/thongtinrap', async function (req, res, next) {
    const {id} = req.query
    Cineplex.findOne({
      where: {
        id: id
      }
    }).then(function (cumraps) {
      res.render('category/thongtinrap', {cumraps});
    }).catch(next);
  });
  
  router.get('/404', (req, res) => {
    res.render('404')
  })
  
  router.get('/lich-su', async (req, res) => {
    // const {userId} = req.session.userId
    const {userId} = req.query
    // const { userId } = req.session
    await Ticket.findAll({
  
      include: [{
        model: Booking,
        where: {
          UserId: userId
        },
        include: [{
          model: Premiere,
  
          include: [{
            model: Movie
  
          },
            {
              model: Cinema,
              include: [{
                model: Cineplex
              }]
            }]
        }]
      }]
    }).then(user => {
      res.json(user)
    })
  })
  
  module.exports = router;
