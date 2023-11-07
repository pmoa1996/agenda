const { async } = require("regenerator-runtime");
const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  if(!req.session.user){
    return res.redirect("/nao-logado")
  }

  const contatos = await Contato.buscaContatos();
  console.log(contatos);
  res.render("index", { contatos: contatos });
};
