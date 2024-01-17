const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      phone: {
        countryCode: {
          type: String,
          required: true,
          trim: true,
        },
        number: {
          type: String,
          required: true,
          unique: true,
          trim: true,
        },
      },
      password: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model('User', UserSchema);
