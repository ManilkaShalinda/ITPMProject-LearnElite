const Innovations = require('../models/submitInnovationModel');
const asyncHandler = require('express-async-handler');

//Get Innovations controller
const getInnovation =  asyncHandler(
    async(req,res)=>{
        const innovations = await Innovations.find()
        res.json(innovations);
    }
)

//Create innovation controller
const  createInnovation = asyncHandler(async (req, res) => {
  const { innovationType,innovationTitle, innovationDes, innovationImage,innovationFile } = req.body;

  if (! innovationType || !innovationTitle || !innovationDes || !innovationImage || !innovationFile) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const Innovation = new Innovations({ user: req.user._id, innovationType,innovationTitle, innovationDes, innovationImage,innovationFile });

    const createdInnovation = await Innovation.save();

    res.status(201).json(createdInnovation);
  }
});

//Get one innovations controller
const getInnovationById= asyncHandler(async (req,res)=>{
     const innovation= await Innovations.findById(req.params.id);

     if(innovation){
      res.json(innovation);
     }else{
      res.status(404).json({message: "Innovation Item is not found"});
     }
     res.json(note);
  }
)

//delete innovation controller
const deleteInnovation = asyncHandler(async (req, res) => {
  const innovation = await Innovations.findById(req.params.id);

  if ( innovation.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if ( innovation ) {
    await  innovation.remove();
    res.json({ message: "Innovation item is removed" });
  } else {
    res.status(404);
    throw new Error("This kind of innovation is not Found");
  }
});


//export all functions
module.exports = {
     getInnovation,
     getInnovationById,
     createInnovation,

}