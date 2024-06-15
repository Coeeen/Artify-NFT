const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: [20, 'Nft have more than 20 characters'],
  },
  email: {
    type: String,
    unique: [true, 'Email is not unique'],
    required: [true, 'User must have an email'],
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email format'],
  },
  img: {
    type: String,
    required: false,
    default:'https://i.ibb.co/d5tGMdZ/model1.jpg'
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  password: {
    type: String,
    required: [true, 'User must have a password'],
    minlength: [8, 'Password must have min 8 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'User must confirm password'],
    minlength: [5, 'Password confirmation must have min 5 characters'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not equal',
    },
  },
  nfts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NFT',
    },
  ],
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
