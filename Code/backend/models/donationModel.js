const mongoose = require('mongoose');

const donationSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    addressline2: {
      type: String,
    },
    nic: {
        type: String,
      },
    phone: {
        type: String,
      },
    email: {
        type: String,
      },
    type: {
        type: String, 
    }
  },
  {
    timestamps: true,
  }
);

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;