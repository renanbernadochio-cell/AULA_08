const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const confirmar = document.getElementById("confirmar");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (e) { 
    e.preventDefault();

  if(
       nome.value === "" ||
       telefone.value === "" ||
       senha.value === ""||
       confirmar.value === "" 
  ){
    mensagem.textContent = "preencha os campos";
     mensagem.style.color = "red";
  }else if( senha.value !== confirmar.value){
    mensagem.textContent = "as senhas não coincidem";
    mensagem.style.color = "red";
    mensagem.style.backgroundColor = "black";
  }else{
    mensagem.textContent = "Cadastro Realizado Com Sucesso!!!!";
    mensagem.style.color = "green";
    mensagem.style.backgroundColor = "white";
  }
});