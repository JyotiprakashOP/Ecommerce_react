// Use import instead of require in ES Modules
import { Router } from 'express';
import { signupValidation, loginValidation } from '../Middlewares/validation.js';
import { signup, login } from '../Controllers/authController.js';
import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware.js';

const router = Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

router.get('/user-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

export default router;
