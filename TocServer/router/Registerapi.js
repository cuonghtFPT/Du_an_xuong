const express = require('express');
const router = express.Router();
const registerModel = require('../model/register');

// Route để lấy danh sách người đăng ký
router.get('/get-list-register', async (req, res) => {
    try {
        const data = await registerModel.find();
        res.json({
            status: 200,
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            data: []
        });
    }
}); 

// Route để thêm người đăng ký mới
router.post('/add-register', async (req, res) => {
    try {
        const { user, pass } = req.body;
        const newRegister = new registerModel({
            user: user,
            pass: pass
        });
        const savedRegister = await newRegister.save();
        res.json({
            status: 200,
            message: 'Register added successfully',
            data: savedRegister
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            data: []
        });
    }
});

// Route để đăng nhập
router.post('/add-login', async (req, res) => {
    try {
        const { user, pass } = req.body;
        const registeredUser = await registerModel.findOne({ user, pass });

        if (registeredUser) {
            res.json({
                status: 200,
                message: 'Login successful',
                data: registeredUser
            });
        } else {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized',
                data: null
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            data: []
        });
    }
});

module.exports = router;
