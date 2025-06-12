
import express from 'express';
import { signupHandler,loginHandler } from '../controllers/authController.js';

const router = express.Router();


router.post('/signup',signupHandler)
router.post('/login',loginHandler)
export default router;
