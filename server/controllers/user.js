const { generateOtp } = require('../helpers/otp');
const CustomError = require('../models/error');


exports.userSignIn = async (req, res) => {
    const { username, password } = req.body;

    if (username === 'melco' && password === 'Test123!') {
        const otp = generateOtp(6)
        res.json({ isSuccess: true, otp: otp });
    } else {
        res.json(CustomError("Invalid username or password", 400))
    }
};