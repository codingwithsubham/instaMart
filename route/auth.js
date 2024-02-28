const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_KEY, EXPIRES_IN } = require('../config/constant');
const auth = require('../middleware/auth');
const config = require('config');
const jwtKey = config.get(JWT_KEY);
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { id, pwd } = req.body;
  try {
    const user = await User.findOne({ userid: id });
    if (!user) {
      return res.status(400).json({ error: 'Invalid Credentials' });
    }
    if (user?.password !== pwd) {
      return res.status(400).json({ error: 'Invalid Credentials' });
    }
    jwt.sign(
      { _id: user._id, userid: user.userid },
      jwtKey,
      { expiresIn: EXPIRES_IN },
      (err, token) => {
        if (err) {
          throw err;
        }
        return res.json({ token });
      }
    );
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: 'Invalid Credentials' });
  }
});

router.post('/register', async (req, res) => {
  const { id, pwd } = req.body;
  let user = await User.findOne({ userid: id });
  if(user){
    return res.status(400).json({ error: 'User Already Exist' });
  }
  try {
    user = new User({
      password: pwd,
      userid: id,
      role: 'user'
    });
    await user.save();
    jwt.sign(
      { _id: user._id, userid: user.userid },
      jwtKey,
      { expiresIn: EXPIRES_IN },
      (err, token) => {
        if (err) {
          throw err;
        }
        return res.json({ token });
      }
    );
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user._id}).select("-password");
    return res.json(user)
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
