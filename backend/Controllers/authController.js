import userModel from "../Models/user.js"; // Ensure this points to your user model
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;
        
        // Validations
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
        if (!phone) {
            return res.status(400).json({ message: 'Phone number is required' });
        }
        if (!address) {
            return res.status(400).json({ message: 'Address is required' });
        }
        if (!answer) {
            return res.status(400).json({ message: 'Answer is required' });
        }

        // Check for existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists, you can log in.', success: false });
        }

        // Create new user
        const newUser = new userModel({ name, email, password, phone, address,answer });
        newUser.password = await bcrypt.hash(password, 10); // Hash the password

        // Save the new user
        await newUser.save();
        return res.status(201).json({ message: 'Signup successful.', success: true });

    } catch (err) {
        console.error("Error during signup:", err);
        return res.status(500).json({ message: 'Internal server error.', success: false });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const errorMsg = 'Authentication failed, wrong email or password';

        // Check if user exists in the database
        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("User not found with email:", email); // Debug log
            return res.status(400).json({ message: errorMsg, success: false });
        }

        console.log("User found:", user.email); // Debug log

        // Compare the provided password with the stored hashed password
        const isPassEqual = await bcrypt.compare(password, user.password);
        console.log("Password comparison result:", isPassEqual); // Debug log

        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET, // Ensure this variable is set in your environment
            { expiresIn: '7d' }
        );

        // Login successful
        console.log("Login successful for user:", user.email); // Debug log
        return res.status(200).json({ 
            message: 'Login successful', 
            success: true, 
            jwtToken, 
            email, 
            name: user.name 
        });

    } catch (err) {
        console.error("Error during login:", err); // Debug log
        return res.status(500).json({ message: 'Internal server error.', success: false });
    }
};


//forgot password controller

export const forgotPasswordController = async(req,res)=>{
    try {
        const {email,answer,newPassword} = req.body
        if(!email){
            res.status(400).json    ({message : 'Email is required'})
        }
        if(!answer){
            res.status(400).json({message : 'Answer is required'})
        }
        if(!newPassword){
            res.status(400).json({message : 'New Password is required'})
        }
        //check email and answer
        const user = await userModel.findOne({email,answer})
        //validation
        if(!user){
            return res.status(404).json({
                success : false,
                message : 'Wrong email or answer'
            })
        }
        const hashed = await bcrypt.hash(newPassword, 10)
        await userModel.findByIdAndUpdate(user._id,{password : hashed})
        res.status(200).json({success: true,message : 'Password updated succesfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "something went wrong",success : false,error})   
    }
}
