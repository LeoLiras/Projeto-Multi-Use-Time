var $time = document.querySelector('.time div');
var $date = document.querySelector('.date');
var $button_clock = document.querySelector('.button-clock');
var intervalo = '';
//Define as variáveis utilizadas.
$button_clock.addEventListener('click', clock, true);
//Adiciona o evento que irá iniciar o relógio.
function clock(){
    formataDisplay('none', 'none', 'none');
//Esconde os botões do cronômetro.
    clearTimeIntervals();
//Limpa as funções temporizadoras, caso estejam ocorrendo, evitando, assim, que o funcionamento do cronômetro ou do relógio interfiram um no outro.
    intervalo = setInterval(getActualTime, 1000); //1000 ms == 1s
//inicia o relógio. Como a função será chamada uma vez por segundo, o relógio será atualizado uma vez a cada segundo.
}

function getActualTime(){
    
    $time.textContent = data();
//Pega a data atual e plota ela na div time.
}

function data(){
    var data_atual = new Date();
//Busca a data atual;  
    $date.textContent = (data_atual.getDate()) + '/' + (data_atual.getMonth() + 1) + '/' + data_atual.getFullYear();
//Separa o dia, mês e ano da data atual e os plota na div 'date'. 
    var hora = data_atual.getHours();
    var min = data_atual.getMinutes();
    var seg = data_atual.getSeconds();
//Busca a hota, mínuto e segundo atuais.

    return hora + ':' + min + ':' + seg;
//retorna o horário atual;
}

function clearTimeIntervals(){
    clearInterval(contagem);
    clearInterval(intervalo);
}