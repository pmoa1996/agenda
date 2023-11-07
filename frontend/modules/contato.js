import validator from "validator";

export default class AddContato {
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
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');

    let error = false;

    this.removeErrorMessages(el);

    if (nomeInput.value.length <= 0 || nomeInput.value.length > 40) {
      this.addErrorMessage(
        nomeInput,
        "O nome precisa ter entre 1 e 40 caracteres"
      );
      error = true;
    }

    if (sobrenomeInput.value.length <= 0 || sobrenomeInput.value.length > 40) {
      this.addErrorMessage(
        sobrenomeInput,
        "O sobrenome precisa ter entre 1 e 40 caracteres"
      );
      error = true;
    }

    if (!validator.isEmail(emailInput.value)) {
      this.addErrorMessage(emailInput, "O e-mail precisa ser válido");
      error = true;
    }

    if (telefoneInput.value.length < 8 || telefoneInput.value.length > 11) {
      this.addErrorMessage(
        telefoneInput,
        "O telefone precisa ter entre 8 e 11 caracteres"
      );
      error = true;
    }

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
