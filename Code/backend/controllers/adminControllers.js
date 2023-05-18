const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModels');
const genarateToken = require('../utils/genarateToken');

const registerAdmin = asyncHandler(async(req, res) =>{
    const { name,email,password,pic} = req.body;
    const adminExists = await Admin.findOne({ email });

    if(adminExists){
        res.status(400);
        throw new Error("Admin Already Exists");
    }

    const admin = await Admin.create({
        name,
        email,
        password,
        pic,
    });

    if(admin){
        res.status(201).json({
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            isAdmin: admin.isAdmin,
            pic: admin.pic,
            token: genarateToken(admin._id),
        });
      }else{
         res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});

//login
const authAdmin = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    const admin = await Admin.findOne({email});
    if(admin && (await admin.matchPassword(password))){
        res.json({
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            isAdmin: admin.isAdmin,
            pic:admin.pic,
            token: genarateToken(admin._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});

module.exports = { registerAdmin,authAdmin }