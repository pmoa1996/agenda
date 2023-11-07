const { default: mongoose } = require("mongoose");
const monggose = require("mongoose");

const HomeSchema = new monggose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

class Home {}

module.exports = Home;
