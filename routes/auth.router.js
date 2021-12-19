const express = require('express');
const passport = require('passport');

const AuthService = require('./../services/auth.service');

const router = express.Router();
const services = new AuthService();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(services.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const rta = await services.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
