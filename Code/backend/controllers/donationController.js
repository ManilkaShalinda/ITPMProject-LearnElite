const Donation = require('../models/donationModel');
const asyncHandler = require('express-async-handler');

const getDonation =  asyncHandler(
    async(req,res)=>{
        const donation = await Donation.find()
        res.json(donation);
    }
)


// Create Donation controller
const  CreateDonation = asyncHandler(async (req, res) => {
  const { name, address, addressline2, nic, phone, email, type } = req.body;

  if (!name || !address || !addressline2 || !nic || !phone || !email || !type) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const donation = new Donation ({ name, address, addressline2, nic, phone, email, type });

    const createdDonation = await donation.save();

    res.status(201).json(createdDonation);
  }
});
//Get one donation controller
const getDonationById= asyncHandler(async (req,res)=>{
    const donation = await Donation.findById(req.params.id);

    if(donation){
     res.json(donation);
    }else{
     res.status(404).json({message: "Donation not found"});
    }
    res.json(note);
 }
)

//Update category controller
// const UpdateCategory = asyncHandler(async (req, res) => {
//  const { foodname, price, category, pic } = req.body;

//  const product = await Category.findById(req.params.id);

//  if (product.user.toString() !== req.user._id.toString()) {
//    res.status(401);
//    throw new Error("You can't perform this action");
//  }

//  if (product) {
//    product.foodname = foodname;
//    product.price = price;
//    product.category = category;
//    product.pic = pic;

//    const updatedCategory = await product.save();
//    res.json(updatedCategory);
//  } else {
//    res.status(404);
//    throw new Error("Category not found");
//  }
// });

//delete category controller
// const DeleteDonation= asyncHandler(async (req, res) => {
//  const donation = await Donation.findById(req.params.id);

//  if ( donation.user.toString() !== req.user._id.toString()) {
//    res.status(401);
//    throw new Error("You can't perform this action");
//  }

//  if ( product) {
//    await  product.remove();
//    res.json({ message: "Product Removed" });
//  } else {
//    res.status(404);
//    throw new Error("Note not Found");
//  }
// });

module.exports = {getDonation, CreateDonation, getDonationById};
