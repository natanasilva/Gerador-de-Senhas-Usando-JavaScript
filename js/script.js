let sliderElement = document.querySelector("#tamanho");
let tamanhoDaSenha = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$&*#@()-_=+/';
let novaSenha = '';

tamanhoDaSenha.innerHTML = sliderElement.value;

tamanho.oninput = function() {
    tamanhoDaSenha.innerHTML = this.value;
}

function gerarSenha(){

  let pass = '';
  for(let i = 0, n = caracteres.length; i < sliderElement.value; ++i){
    pass += caracteres.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("ocultar");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copiarASenha(){
  navigator.clipboard.writeText(novaSenha).then(
    () => {
      Swal.fire({
        title: 'Tudo certo!',
        text: `A Senha ${novaSenha} foi copiada!`,
        icon: 'success',
        confirmButtonText: 'Fechar'
      })
    },
    () => {
      alert("Erro ao copiar a senha!")
    },
  );
}