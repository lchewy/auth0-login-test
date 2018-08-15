const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  auth0Profile: Schema.Types.Mixed
});

mongoose.model("users", userSchema);
