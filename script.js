
// colocamos um onclick em cada numeto para chamar na funcao//


function insert(num){

  const numero= document.querySelector ('#resultado').innerHTML; //porque quero exibir o resultado//
  document.querySelector('#resultado').innerHTML=numero + num //quando coloco uma variavel numero+num aparece os numeros juntos na tela resultado//

}

function clean() {
    document.querySelector('#resultado').innerHTML="" // essa function é para limpar //
}

function back(){
    const resultado= document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML= resultado.substring(0,resultado.length -1)
}

function calcular() {

    const resultado = document.querySelector('#resultado').innerHTML
   if (resultado)
   {
       document.querySelector('#resultado').innerHTML = eval(resultado) //eval faz acontecer o calculo//
   }
}

