const mongoose = require('mongoose');

const videoUploadingSchema = mongoose.Schema(
  {
    videoCategory: {
      type: String,
    },

    videoFile:{
      type:String,
      default:"https://icon-library.com/images/videographer-icon/videographer-icon-24.jpg",
    },

    videoTitle: {
      type: String,
      required : true,
    },

    videoCaption: {
      type: String,
      required: true,
    },

    dateofUpload:{
      type:String,
    },
  },
  {
    timestamps: true,
  }
);

const VideoUploading = mongoose.model("VideoUploading", videoUploadingSchema);

module.exports = VideoUploading;