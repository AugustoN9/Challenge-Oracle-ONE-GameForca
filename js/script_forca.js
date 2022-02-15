
var forca = document.getElementById("forca").getContext('2d');

    function part01base(){
        for(b = 40; b < 220; b++){   
            forca.fillStyle="#7F7F00";
            forca.beginPath();
            forca.arc(b,310,10,0,Math.PI*2,true);
            forca.closePath();
            forca.fill();        
        }
    }

    function part02poste(){
        for(i = 150; i < 300; i++){
            forca.fillStyle="#7F7F00";
            forca.beginPath();
            forca.arc(90,i,10,0,Math.PI*2,true);
            forca.closePath();
            forca.fill();
        }
        
    }

    function part03poste(){
        for(i = 10; i < 150; i++){
            forca.fillStyle="#7F7F00";
            forca.beginPath();
            forca.arc(90,i,10,0,Math.PI*2,true);
            forca.closePath();
            forca.fill();
        }
        
    }

    function part04poste(){
        for(a = 90; a < 220; a++){   
            forca.fillStyle="#7F7F00";
            forca.beginPath();
            forca.arc(a,10,10,0,Math.PI*2,true);
            forca.closePath();
            forca.fill();                
        }
        
    }  

    function lacoforca(){
        var cor = "#7F7F00";
        forca.strokeStyle = cor;
        forca.beginPath();
        forca.arc(220,50,18,0,Math.PI*2,true);
        forca.closePath();
        forca.lineWidth=4;
        forca.stroke(); 

        for(i = 20; i < 30; i++){
            forca.fillStyle=cor;
            forca.beginPath();
            forca.arc(220,i,3,0,Math.PI*2,true);
            forca.closePath();
            forca.fill();
        }

    }     
    
    var cores = "white";

    function cabeca(){
        forca.fillStyle= cores;
        forca.beginPath();
        forca.arc(227,49,20,0,Math.PI*2,true);
        forca.closePath();
        forca.fill(); 

    }   
        
    function bracoDir(){                     
        var y = 230;
        do{
            for(i = 80; i < 120; i++){                    
                forca.fillStyle=cores;
                forca.beginPath();
                forca.arc(y,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                y = y + 1;
                }
        }while(y < 240)                    
    }
     
        
    function bracoEsq(){                     
        var x = 202;
        var cor = cores;
        do{
            for(i = 80; i < 120; i++){                    
                forca.fillStyle = cor;
                forca.beginPath();
                forca.arc(x,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                x = x - 1;
                }
        }while(x > 240)                    
    }
       
    function pernaDir(){                     
        for(i = 150; i < 220; i++){                    
                forca.fillStyle=cores;
                forca.beginPath();
                forca.arc(232,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                }                  
    }
        
    function pernaEsq(){                     
        for(i = 150; i < 220; i++){                    
                forca.fillStyle=cores;
                forca.beginPath();
                forca.arc(208,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                }                  
    }
    
    function torax(){  
        
            for(i = 80; i < 145; i++){                    
                forca.fillStyle=cores;
                forca.beginPath();
                forca.arc(220,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                }
            for(i = 80; i < 145; i++){                    
                forca.fillStyle=cores;
                forca.beginPath();
                forca.arc(208,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                }
            for(i = 80; i < 145; i++){                    
                forca.fillStyle=cores;
                forca.beginPath();
                forca.arc(232,i,10,0,Math.PI*2,true);
                forca.closePath();
                forca.fill();
                }

    }

    function desenhaforca(){
        part01base();
        part02poste();
        part03poste();
        part04poste();
        lacoforca();
    }

    function desenhaboneco(){
        cabeca();
        torax();
        bracoDir();
        bracoEsq();
        pernaDir();
        pernaEsq();
    }

    desenhaforca();
/*
cabeca();
torax();
bracoDir();
pernaEsq();
bracoEsq();
pernaDir();
*/
let keys = document.querySelectorAll('.keyboard_wrapper .key .row span');

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

var achou = false;
var acertos = 0;
var tentativas = 6;
var desenho = [pernaDir,bracoEsq,pernaEsq,bracoDir,torax,cabeca];
var acertou_quantas_vezes = 0;


function escolhaAleatoria(lista){

    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    var indiceAleat = random(0, escolher.length);

    var palavrasecreta = lista[indiceAleat]
    palavrasecreta = palavrasecreta.toUpperCase();
    console.log('Palavra Aleatoria '+palavrasecreta);
    
    return palavrasecreta;
}

var secreta = escolhaAleatoria(frutas);
console.log('A variavel secreta '+secreta);

let lista_caracter = [''];

function preencheDiv(palavradiv){
    let lista_caracter = palavradiv.split('')

    for(var i = 0; i < lista_caracter.length; i++){
        var novadiv = document.createElement('div'); //cria o elemento div
        novadiv.setAttribute('id', id = "letra"+[i+1]); //Atribui nome da div
        novadiv.classList.add('letra');
        novadiv.innerHTML = lista_caracter[i]; // Conteúdo da div
        novadiv.style = 'color: rgb(86, 86, 236);'
        document.getElementById('nova').appendChild(novadiv);
        acertos++
    }
   
}

preencheDiv(secreta);

function confereLetra(id){
    var caracter_teclado = document.getElementById(id).value;
    var caracter = secreta.split('');
    var caractere = '';



    for(var i = 0; i < caracter.length; i++){

        if(caracter_teclado == caracter[i]){
            let letraDisplay = document.getElementById('letra'+[i+1]);
            letraDisplay.style = "color: white;"
            console.log('acertou esta letra '+caracter_teclado);
            achou = true;   
            acertos++;
            acertou_quantas_vezes++;
            caractere = caracter[i];  
        }  

    }
    console.log('VOCE ACERTOU '+acertou_quantas_vezes);
    
    vencedor(    acertou_quantas_vezes);

    function vencedor(acertos_v){
        if(acertos_v === caracter.length){
            setTimeout(parabens, 500);
        }
    }

    function parabens(){
        alert('PARABENS VOCE VENCEU!!!');
    }
    

    console.log('O valor do caracter eh '+caractere)
     
    if(caracter_teclado != caractere){
        if(tentativas >= 1){
        
        desenho[5]();
        desenho[tentativas-1]();
        
        tentativas--;
        var mostratentativas = document.getElementById('tentativas');
        mostratentativas.innerHTML = 'Restam '+tentativas+' tentativas!';
        console.log('VOCE ERROU, AINDA TEM '+tentativas+' CHANCE(S) AINDA.'); 
        //alert('VOCE ERROU, AINDA TEM '+tentativas+' CHANCE(S) AINDA.');
        
        }
    }

    if(tentativas == 0){
        setTimeout(perdeu, 500);
    }

    function perdeu(){
        alert('VOCÊ PERDEU!!!');
        cores="black";
    }
}


window.addEventListener("load", preencheDiv);

var botaoReiniciar = document.querySelector("#refresh");
botaoReiniciar.addEventListener("click", function() {
    desenhaforca();
    preencheDiv(secreta);
    location.reload();
});
