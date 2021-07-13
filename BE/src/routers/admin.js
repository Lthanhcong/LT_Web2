const ensureLoggedIn = require('../middlerwares/ensure-logged-in');
const User = require('../model/user');
const cinema = require('../model/cinema');
const cineplex = require('../model/cineplex');
const ticket = require('../model/ticket');
const premiere = require('../model/premiere');
const movie = require('../model/movie');
const booking = require('../model/booking');

const express = require('express');

const router = express.Router();

router.use(ensureLoggedIn);

router.get('/', async function (req, res) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    ticket
                        .findAll({
                            include: [
                                {
                                    model: booking,
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
                                                            where: {
                                                                id: 2,
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        })
                        .then((bookings) => {
                            res.status(200).json({ bookings });
                        });
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/movie', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    movie
                        .findAll()
                        .then(function (movies) {
                            res.status(200).json({ movies });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/cinema', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    cinema
                        .findAll()
                        .then(function (cinemas) {
                            res.status(200).json({ cinemas });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/cineplex', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    cineplex
                        .findAll()
                        .then(function (Cineplexs) {
                            res.status(200).json({ Cineplexs });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/user', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    User.findAll()
                        .then(function (users) {
                            res.status(200).json({ users });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/premiere', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    premiere
                        .findAll()
                        .then(function (premieres) {
                            res.status(200).json({ premieres });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/booking', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    booking
                        .findAll()
                        .then(function (bookings) {
                            res.status(200).json({ bookings });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/ticket', async function (req, res, next) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    ticket
                        .findAll()
                        .then(function (tickets) {
                            res.status(200).json({ tickets });
                        })
                        .catch(next);
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});


router.get('/insertmovie', async function (req, res) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    res.status(200).json({ user });
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/insertcineplex', async function (req, res) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    res.status(200).json({ user });
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/insertcinema', async function (req, res) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    res.status(200).json({ user });
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

router.get('/insertpremiere', async function (req, res) {
    const userid = req.session.userId;
    if (!userid) {
        res.redirect('/');
    } else {
        const user = await User.findOne({
            where: {
                id: userid,
            },
        }).then((user) => {
            if (user) {
                if (user.Verify == 1 && user.UserType == 1) {
                    res.status(200).json({ user });
                } else {
                    res.redirect('/');
                }
            }
        });
    }
});

module.exports = router;
