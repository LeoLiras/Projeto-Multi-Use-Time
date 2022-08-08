var $iniciar = document.querySelector('.iniciar');
var $pausar = document.querySelector('.pausar');
var $parar = document.querySelector('.parar');
var $button_cronometer = document.querySelector('.button-cronometer');
var seg = 0, min = 0, hora = 0, ms = 0, contagem = null;
//Traz os elemetos HTML para o Javascript.

$button_cronometer.addEventListener('click', cronometer, true);
$iniciar.addEventListener('click', iniciar);
$pausar.addEventListener('click', pausar);
$parar.addEventListener('click', parar); 

//Seta os eventos que irão ocorrer ao clicar nos botões.

function cronometer(){
    clearTimeIntervals();
//Limpa as funções temporizadoras, caso estejam ocorrendo, evitando, assim, que o funcionamento do cronômetro ou do relógio interfiram um no outro.
    formataDisplay('inline', 'none', 'none');
//Formata o display do cronômetro(os botões iniciar, pausar e parar) adequadamente.
    $time.textContent = '00:00:00'
    $date.textContent = '';
}

function iniciar(){
    contagem = setInterval(function(){
//Inicia o cronômetro. Está função será chamada uma vez por segundo, ou seja, o valor do cronômetro será atualizado a cada segundo.
    formataDisplay('none', 'inline', 'inline');

    $time.textContent = hora + ':' + min + ':' + seg ;

    seg++;                                                                    //melhoria = usar datenow para melhorar a precisão.
   
    if(seg > 59){
        min++;
        seg = 0;
    }else if(min > 59){
        hora++;
        min = 0;
        seg = 0;
    }else if(hora > 23){
        hora = 0;
        min = 0;
        seg = 0;
    }
    }, 1000);
//1000ms == 1s.
}

function pausar(){
    clearInterval(contagem); 
//Limpa a contagem, ou seja, pausa a função.
    formataDisplay('inline', 'none', 'inline');

    $iniciar.textContent = 'Retomar';                         
}

function parar(){ 
//Pausa a contagem e zera todos os valores, reiniciando o cronômetro.
    clearInterval(contagem);
    hora = 0;
    min = 0;
    seg = 0;

    formataDisplay('inline', 'inline', 'inline');

    $iniciar.textContent = 'iniciar';

    $time.value = hora + ':' + min + ':' + seg;
}

function formataDisplay(iniciar, pausar, parar){
    $iniciar.style.display = iniciar;
    $pausar.style.display = pausar;
    $parar.style.display = parar;
}