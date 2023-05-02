const mongoose = require('mongoose');

const submitInnovationSchema = mongoose.Schema(
  {
    innovationType: {
      type: String,
    },
    innovationTitle: {
      type: String,
    },
    innovationDes: {
      type: String,
    },
    innovationImage:{
      type:String,
      default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    innovationFile:{
      type:String,
      default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const SubmitInnovation = mongoose.model("SubmitInnovation", submitInnovationSchema);

module.exports = SubmitInnovation;