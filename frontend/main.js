import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/login";
import AddContato from "./modules/contato";

const cadastro = new Login(".form-cadastro");
const login = new Login(".form-login");

const addContato = new AddContato(".form-contato");

login.init();
cadastro.init();
addContato.init();

//import "./assets/css/style.css";
