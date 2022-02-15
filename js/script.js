let keys    = document.querySelectorAll('.keyboard_wrapper .key .row span'),
    keyPad  = document.querySelector('.keyboard_wrapper .key'),
    display = document.querySelector('.keyboard_wrapper .display');

document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click", function(event){

        const el = event.target || event.srcElement;
        const id = el.id;
        var idSel = id;
        console.log(idSel);
        if(idSel != null){              
            confereLetra(idSel);                
        }
    })
})


var palavras = ['programador','desenvolvedor','administrador','engenheiro','padeiro','cozinheiro','confeiteiro','fotografo','professora'];
var frutas = ['abacaxi','uva','laranja','melancia','banana','maça','bergamota','coco','mamao','jabuticaba', 'tangerina', 'goiaba', 'pessego'];
var secreta = '';
var escolher = frutas;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
var indiceAleat = random(0, escolher.length);

var palavrasecreta = escolher[indiceAleat]
palavrasecreta = palavrasecreta.toUpperCase();
console.log('Palavra Aleatoria '+palavrasecreta);

function preencheDiv(secreta){
    let caracter = secreta.split('')

    for(var i = 0; i < secreta.length; i++){
        var novadiv = document.createElement('div'); //cria o elemento div
        novadiv.setAttribute('id', id = "letra"); //Atribui nome da div
        novadiv.classList.add('letra'+[i+1]);
        novadiv.innerHTML = caracter[i]; // Conteúdo da div
        document.getElementById('nova').appendChild(novadiv);
        console.log('div '+i );
        console.log(caracter[i]);
    }
}

preencheDiv(palavrasecreta);
window.addEventListener("load", preencheDiv);

function confereLetra(id){

        var caracter_teclado = document.getElementById(id);

        //preencheCampo(palavra);

        var caracter = palavrasecreta.split('');

        var cont = 0;

        for(var i = 0; i < caracter.length; i++){
            if(caracter_teclado == caracter[i]){

                cont = cont++;         
            } 
        }
                if(cont > 0 ){
                    esconde(id);
                    exibirLetraSecreta();
                    console.log('A letra '+caracter_teclado+' foi encontrada '+cont+' vezes');  
                    alert('PARABENS! A palavra secreta possui a letra escolhida '+caracter_teclado)
                }     
                else{
                    alert('VOCE ERROU! A palavra secreta NÃO POSSUI a letra escolhida '+caracter_teclado)
                }         
        

//confereLetra();

function exibirLetraSecreta(){

    var tecla_off = document.querySelector('.secreta');
    var tecla_off = document.getElementsByClassName('.letra[i]');

    var estado = tecla_off.style.display;

    tecla_off.style.display = estado == 'none' ? 'inline':'none';
}

function esconde(tecla) {  

    //var tecla_on = document.querySelector(tecla);
    var tecla_on = document.getElementById(tecla);

    var estado = tecla_on.style.display;

    tecla_on.style.display = estado == 'inline' ? 'none':'inline';

    /*
    if(tecla_on == 'inline') {  
        tecla_on = 'none';  
     }    
     */    
 }
        
/*
    function aleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

        const palavra = 'abacaxi';
        const letras = palavra.split('')
        console.log(palavra)
        console.log(letras)
        console.log(letras.length)

        inf = 0
        sup = frutas.length
        var resp = aleatorio(inf,sup)

        var palavraescolhida = frutas[resp]

        var secreta = palavraescolhida.split('')

        console.log('Valor aleatorio '+palavraescolhida)
        console.log('variavel secreta ['+secreta+' ]')
       

*/  

    var entrada = '';
    let novadiv2 = document.getElementsByClassName('letra1');
    
    function testarLetraUser(entrada){
       
       
        for( var x = 0; x < secreta.length; x++){

            if(entrada == secreta[x]){
                //novadiv2.style.letra.display = "inline-block";
                console.log('CORRETO '+secreta[x])
                console.log(secreta[x])
                
            }
            else{
                //novadiv2.style.letra.display = "none";
                console.log('INCORRETO ')

            }
        }
    }
    
    console.log('Letra a ser testada '+novadiv2)