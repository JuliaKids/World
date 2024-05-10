let nomeUsuário = "";
let elemento = document.queryselector("#nome=usuário");

while(nomeUsuário==""){
    nomeUsuario = prompt("Qual o seu nome?"); 
}

if(nomeUsuario == null){
    elemento.textcontent = 'seja muito bem-Vindo';
}else{
    elemento.textcontent = nomeUsuário;
}

