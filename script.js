// base 64

var btnCodifica = document.querySelector('.input');
var btnDecodifica = document.querySelector('.output');
var result = document.querySelector('.result');
var result2 = document.querySelector('.result2')






function codiBase(e) {
  
    var codigo = document.querySelector('#codigo').value;
    var codificar = document.querySelector('#codificar').value;

   if (codigo == 'base' && codificar=='codificar') {
    
    var CodigoMsg =result.value
    CodigoMsg = window.btoa(CodigoMsg)

    
    result2.innerHTML=CodigoMsg

   }
}

function decoBase() {
    
    var codigo = document.querySelector('#codigo').value;
    var decodificar = document.querySelector('#decodificar').value;

   if (codigo == 'base' && decodificar == 'decodificar') {
    
    var CodigoMsg =result.value
    CodigoMsg = window.atob(CodigoMsg)

    
    result2.innerHTML=CodigoMsg
   }
}
 

// Cifra de cesar


btnCodifica.addEventListener('click',function (e) {
    e.preventDefault()

    var codigo = document.querySelector('#codigo').value;
    var codificar= document.querySelector('#codificar').value;
    var msgEntrada = result.value
    var x = key
    
    if(codigo == 'cifra' && codificar=='codificar' ){

        result2.innerHTML= codiCifra(msgEntrada,x)
    }
})

btnDecodifica.addEventListener('click',function (e) {
    e.preventDefault()

    var codigo = document.querySelector('#codigo').value;
    var decodificar = document.querySelector('#decodificar').value;
    var msgEntrada = result.value
    var x = key
    
    if(codigo == 'cifra' && decodificar=='decodificar' ){

        result2.innerHTML= decoCifra(msgEntrada,x)
    }
})



// KEY
let key = +document.getElementById("key").innerHTML;

function prev() {
    if(key > 1) {
        key--;
        document.getElementById("key").innerHTML = key;
    }
}

function next() {
    if(key < 24) {
        key++;
        document.getElementById("key").innerHTML = key;
    }
}


// codificando CIFRA

function codiCifra(msgEntrada, x) {
    mensagem = "";
    msgEntrada = msgEntrada.toUpperCase();
    x = parseInt(x);
    for (var i = 0; i <= msgEntrada.length - 1; i++) {
      var msgCodificada = ((msgEntrada.charCodeAt(i) - 65 + x) % 26) + 65;
      mensagem += String.fromCharCode(msgCodificada);
    }
    return mensagem;
  }
  

// decodificando
function decoCifra(msgEntrada, x) {
    mensagem = "";
    msgEntrada = msgEntrada.toUpperCase();
    x = parseInt(x);
    for (var i = 0; i <= msgEntrada.length - 1; i++) {
      var msgCodificada = ((msgEntrada.charCodeAt(i) - 65 - x) % 26) + 65;
      mensagem += String.fromCharCode(msgCodificada);
    }
    return mensagem;
  }
  