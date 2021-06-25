const User = require('../../model/user');
const sendEmail = require('./email.send');
const msgs = require('./email.msgs');
const templates = require('./email.templates');


// The callback that is invoked when the user submits the form on the client.
exports.collectEmail = (req, res) => {
    const { email } = req.body;

    User.findOne({ email })
        .then((user) => {
            // We have already seen this email address. But the user has not
            // clicked on the confirmation link. Send another confirmation email.
            if (user && !user.confirmed) {
                sendEmail(user.email, templates.confirm(user._id)).then(() =>
                    res.json({
                        msg: msgs.resend,
                    }),
                );
            }
            // The user has already confirmed this email address
            else {
                res.json({ msg: msgs.alreadyConfirmed });
            }
        })
        .catch((err) => console.log(err));
};

// The callback that is invoked when the user visits the confirmation
// url on the client and a fetch request is sent in componentDidMount.
exports.confirmEmail = (req, res) => {
    const { id } = req.params;

    User.findById(id)
        .then((user) => {
            // A user with that id does not exist in the DB. Perhaps some tricky
            // user tried to go to a different url than the one provided in the
            // confirmation email.
            if (!user) {
                res.json({ msg: msgs.couldNotFind });
            }
            // The user exists but has not been confirmed. We need to confirm this
            // user and let them know their email address has been confirmed.
            else if (user && !user.confirmed) {
                User.findByIdAndUpdate(id, { confirmed: true })
                    .then(() => res.json({ msg: msgs.confirmed }))
                    .catch((err) => console.log(err));
            }

            // The user has already confirmed this email address.
            else {
                res.json({ msg: msgs.alreadyConfirmed });
            }
        })
        .catch((err) => console.log(err));
};

exports.sendMailForgetPassword = (email, fullName, link)=>{
    nodemailer(email, `XÁC NHẬN ĐỂ NHẬN MẬT KHẨU MỚI ${fullName}`, `nhấn vào link này ${link}`, function(callback){
        console.log(callback);
    });
};

exports.sendMailBookingTicket = (email ,_mave, _maghe, _tenrap, _tenphim, _thoidiembatdau, _giatien)=>{
    let emailContent = getHeaderEmail('XIN CHÀO')
        + getContentTicket('THÔNG TIN VÉ', _mave, _maghe, _tenrap, _tenphim, _thoidiembatdau, _giatien );
        + getFooterEmail();
        nodemailer(email, 'XÁC NHẬN THÔNG TIN ĐẶT VÉ', emailContent,function(callback){
        console.log(callback);
    });
}
