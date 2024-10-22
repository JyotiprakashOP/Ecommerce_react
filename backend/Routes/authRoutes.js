// Use import instead of require in ES Modules
import { Router } from 'express';
import { signupValidation, loginValidation } from '../Middlewares/validation.js';
import { signup, login, forgotPasswordController } from '../Controllers/authController.js';
import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware.js';

const router = Router();

//signup route
router.post('/signup', signupValidation, signup);

//login route
router.post('/login', loginValidation, login);

//forgot password
router.post("/forgot-password",forgotPasswordController)

router.get('/user-auth', requireSignIn,  (req, res) => {
    res.status(200).send({ ok: true });
});

export default router;
