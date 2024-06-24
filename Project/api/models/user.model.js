const { Schema, model } = require("mongoose");

// const userSchema = new Schema({
//   name: {type: String,required: true},
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   address: { type: String, required: true },
//   phone :{type:String,required:true,maxLength:10}
// }, {
//     timestamps:true, autoCreate:true, autoIndex:true
// });

// const user = model('User', userSchema)
const User = model(
  "User",
  new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      address: { type: String, required: true },
      phone: { type: String, required: true, maxLength: 10 },
    },
    {
      timestamps: true,
      autoCreate: true,
      autoIndex: true,
    }
  )
);
module.exports = User;
