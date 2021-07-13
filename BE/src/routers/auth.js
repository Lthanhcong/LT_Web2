const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const host = require('../services/Email/domain');

const logUser = require('../services/auth/logUser');
const verifyToken = require ('../services/auth/verifyToken');

const moment = require('moment');
const cinema = require('../model/cinema');
const cineplex = require('../model/cineplex');
const ticket = require('../model/ticket');
const premiere = require('../model/premiere');
const movie = require('../model/movie');
const booking = require('../model/booking');

const router = express.Router();


router.post('/signup', logUser.signup);

router.post('/signin', logUser.signin);

router.post('/facebook', logUser.facebookAuth);

router.get('/verify', verifyToken.verifyUser);

router.get('/verify-admin', verifyToken.verifyAdmin);

 
router.post('/update-password', async (req, res) => {
    const { Old_password, New_password, Confirm_password } = req.body;
    const { userId } = req.session;
    if (New_password !== Confirm_password) {
        return res.json({ message: 'Password error' });
    }
    await User.findOne({
        where: {
            id: userId,
        },
    }).then((user) => {
        if (user) {
            bcrypt.compare(Old_password, user.Password).then((compare) => {
                if (compare) {
                    //update password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(New_password, salt, (err, hash) => {
                            User.update(
                                {
                                    Password: hash,
                                },
                                {
                                    where: {
                                        id: userId,
                                    },
                                },
                            ).then((user) => {
                                return res.json({
                                    message: 'Update Password success',
                                });
                            });
                        });
                    });
                } else {
                    return res.json({ massage: 'Update Password error' });
                }
            });
        } else {
            return res.json({ massage: 'User not exist ' });
        }
    });
});



/**
 * @GET_Form_Quản_Lý_pass_word_Profile
 */

 router.get('/chang-password', async (req, res) => {
    const { userId } = req.session;
    var err = [];
    if (userId) {
        res.json({ err });
    } else {
        res.redirect('/auth/signin')
    }
});

/**
 *Xoá user 
 */
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await User.destroy({
        where: {
            id,
        },
    }).then((user) => {
        res.json(user);
    });
});

/**
 *@Post_Quên_Mật_Khẩu
 */

 router.get('/forgot-password', async (req, res) => {
    var err = [];
    res.json({ err });
});

router.post('/forgot-password', async (req, res) => {
    const { Email } = req.body;
    await User.findOne({
        where: {
            Email,
        },
    }).then((user) => {
        if (user) {
            const {sendMailForgetPassword} = require('../services/Email/email.controller');
            const link = host.domain + '/auth/update_password?token=' + user.TokenUser;
            sendMailForgetPassword(user.Email, user.Name, link);
            res.status(400).json({ user });
        } else {
            const err = 'Email no exist';
            res.send({ err });
        }
    });
});

/**
 * @Đổi_Mật_Khẩu
 */

router.get('/updatepassword', async (req, res) => {
    const { token } = req.query;
    var err = [];
    if (!token) {
        return res.redirect('/auth/signin')
    }
    return res.status(400).json({ err, token: token });
});

/**
 * @Post_Đổi_mật_khẩu
 */
router.post('/updatepassword/:token', async (req, res) => {
    const { token } = req.params;
    const { Password, XacNhan_Password } = req.body;

    if (!Password && XacNhan_Password) {
        return res.redirect(`/auth/updatepassword?token=${token}`)
    }
    if (Password !== XacNhan_Password) {
        // const err = "Mật Khẩu Không Khớp"
        return res.redirect(`/auth/updatepassword?token=${token}`)
    }
    await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(XacNhan_Password, salt, (err, hash) => {
            User.update(
                {
                    Password: hash,
                },
                {
                    where: {
                        TokenUser: token,
                    },
                },
            ).then((user) => {
                res.redirect('/auth/signin')
            });
        });
    });
});

/**
 * @Update_Profile
 */

router.post('/update', async (req, res) => {
    const { Email, Name, Phone } = req.body;
    const { userId } = req.session;
    await User.update(
        {
            Email,
            Name,
            Phone,
        },
        {
            where: {
                id: userId,
            },
        },
    ).then((user) => {
        res.redirect(`/auth/profile?id=${userId}`)
    });
});

router.get('/profile', async function (req, res, next) {
    const { id } = req.query;

    if (id != req.session.userId) {
        return res.redirect('/')
    } else {
        User.findOne({
            where: {
                id: id,
            },
        })
            .then(function (users) {
                ticket
                    .findAll({
                        include: [
                            {
                                model: booking,
                                where: {
                                    UserId: req.session.userId,
                                },
                                include: [
                                    {
                                        model: premiere,
                                        include: [
                                            {
                                                model: movie,
                                            },
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
                            },
                        ],
                    })
                    .then((user) => {
                        res.json({ users, user, moment });
                    });
            })
            .catch(next);
    }
});

router.get('/logout', function (req, res) {
	if(req.session.userId){
	  delete req.session.userId;
	  res.redirect('/');
	}
	else{
	  req.logout();
	  res.redirect('/');
	}
  });

module.exports = router;
