const turnOnOff = document.getElementById ('turnOnOff');
/* const turnOff = document.getElementById ('turnOff'); */
const btnReset = document.getElementById('btnReset');
const lamp = document.getElementById ('lamp');

alert('O duplo click na lâmpada faz com que ela quebre.');


function isLampBroken () {
    return lamp.src.indexOf ('Quebrada') > -1;
};

function reset (){
    lamp.src = '/img/LampadaDesligada.jpg';
};

function lampOn (){
    if ( !isLampBroken ()){
        lamp.src = '/img/LampadaLigada.jpg';
    }
};

function lampOff (){
    if ( !isLampBroken()) {
        lamp.src = '/img/LampadaDesligada.jpg';
    }        
};


function lampBroken (){
    lamp.src = '/img/LampadaQuebrada.jpg';
};

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

btnReset.addEventListener('click', reset);
turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener('dblclick', lampBroken);


/* turnOff.addEventListener ('click', lampOff ); */
/* lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff); */