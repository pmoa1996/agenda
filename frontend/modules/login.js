import validator from "validator";

export default class Login {
  constructor(formClass) {
    // Seleciona o formulário com base na classe fornecida
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return; // Verifica se o formulário foi encontrado
    this.form.addEventListener("submit", (evt) => {
      // Quando o formulário é enviado, a função de validação é chamada
      if (!this.validate(evt)) {
        evt.preventDefault(); // Impede o envio do formulário se houver erros
      }
    });
  }

  validate(evt) {
    const el = evt.target;
    // Obtém elementos de entrada do formulário com base em seus nomes
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;
  
    // Remove mensagens de erro existentes
    this.removeErrorMessages(el);
  
    // Valida o campo de e-mail
    if (!validator.isEmail(emailInput.value)) {
      this.addErrorMessage(emailInput, "O e-mail precisa ser válido");
      error = true;
    }
  
    // Valida o campo de senha
    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.addErrorMessage(passwordInput, "A senha precisa ter entre 3 e 50 caracteres");
      error = true;
    }
  
    // Retorna true se não houver erros, caso contrário, false
    return !error;
  }
  
  addErrorMessage(inputElement, message) {
    // Cria uma div para exibir a mensagem de erro
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = message;
    errorDiv.classList.add("text-danger");
    // Anexa a mensagem de erro ao pai do campo de entrada
    inputElement.parentNode.appendChild(errorDiv);
  }
  
  removeErrorMessages(formElement) {
    // Remove todas as mensagens de erro existentes
    const errorMessages = formElement.querySelectorAll(".text-danger");
    errorMessages.forEach((message) => message.remove());
  }
}
