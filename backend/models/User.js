// // models/User.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, 'Please add email'],
//     unique: true,
//     match: [
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       'Please add valid email'
//     ]
//   },
//   password: {
//     type: String,
//     required: [true, 'Please add password'],
//     minlength: 6
//   },
//   username: {
//     type: String,
//     required: [true, 'Please add username'],
//     unique: true
//   },
// });

// // Encrypt password
// UserSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, 'Please add username'],
//     unique: true,
//     trim: true,
//     minlength: [3, 'Username must be at least 3 characters']
//   },
//   email: {
//     type: String,
//     required: [true, 'Please add email'],
//     unique: true,
//     match: [
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       'Please add valid email'
//     ]
//   },
//   password: {
//     type: String,
//     required: [true, 'Please add password'],
//     minlength: [6, 'Password must be at least 6 characters'],
//     select: false
//   }
// });
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } // Ensure required: true
});

// Encrypt password before saving
// models/User.js
// models/User.js
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    console.error("🚨 Password Hashing Error:", err);
    next(new Error("Failed to hash password"));
  }
});


module.exports = mongoose.model('User', UserSchema);