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
}, {
    toJSON: {
        transform: function(_, ret) {
            ret.id = ret._id;
            delete ret.password;
            delete ret.__v;
            delete ret._id;
            return ret;
        },
    },
});

module.exports = mongoose.model('User', UserSchema);
