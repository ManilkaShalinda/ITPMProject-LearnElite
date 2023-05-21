const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const genarateToken = require('../utils/genarteToken');

const registerUser = asyncHandler(async(req,res) =>{
    const { name,email, password,pic }= req.body;

    const userExistes = await User.findOne({ email });// chech the email which was already existes or not

    if(userExistes){
        res.status(400)
        throw new Error('User Allready Exsits');
    }

     //create a obejct called user 
    const user = await User.create({
        name,
        email,
        password,
        pic
    })

    //if user doesn't already inserted create a user
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email: user.email,
            isUser:user.isUser,
            pic: user.pic,
            token:genarateToken(user._id)
        })
    }else{
          res.status(400)
          throw new Error('Error Occured')
    }
})



//login
const authUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;

    const user = await User.findOne({email});

    //match the registered password and the entered passsword
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isUser: user.isUser,
            pic:user.pic,
            token: genarateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});

module.exports = { registerUser,authUser };