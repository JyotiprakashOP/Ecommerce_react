// authMiddleware.js
import userModel from '../Models/user.js';


import jwt from "jsonwebtoken"

// Protected routes token-based
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = await jwt.verify(req.headers.authorization, process.env.Jwt_SECRET);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ message: 'Unauthorized' }); // You may want to return a response in case of error
    }
};

//admin access
export const isAdmin = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if(!user.role !== 1){

        }
    } catch (error) {
        
    }
}
