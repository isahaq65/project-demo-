const router = require('express').Router();
const User = require('../models/userModel');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

router.post('/signout', auth, async (req, res) => {
  try {
    const user = req.user;
    const cookieToken = req.body.token;
    user.tokens = user.tokens.filter((token) => cookieToken != token.token);
    res.cookie('token', ''), (res.user = '');
    await user.save();
    res.send({ result: 'success' });
  } catch (e) {
    error = e.message;
    res.send({ error });
  }
});
router.post('/signin', async (req, res) => {
  try {
    const user = await User.verifyCredentials(
      req.body.email,
      req.body.password
    );
    if (!user) throw new Error('Invalid credentials');
    const token = await user.generateAuthToken();
    res.cookie('token', token);
    res.send({
      user,
      token,
    });
  } catch (e) {
    const error = e.message;
    res.status(400).send({ error });
  }
});

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, role, dept, regNo } = req.body;
    const existsEmail = await User.find({ email });
    if (existsEmail.length) throw new Error('Email already exists');
    let user;
    if (role === 'student') {
      const existsregNo = await User.find({ regNo });
      if (existsregNo.length) throw new Error('RegNo already exists');
      user = new User({
        name,
        email,
        password,
        dept,
        regNo,
      });
    } else {
      user = new User({
        name,
        email,
        password,
        role,
      });
    }
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    const error = e.message;
    res.status(400).send({ error });
  }
});

module.exports = router;
