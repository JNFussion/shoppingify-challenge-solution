var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: { type: String, unique: true, required: true, dropDups: true },
  note: { type: String },
  image: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

module.exports = mongoose.model("Item", ItemSchema);
