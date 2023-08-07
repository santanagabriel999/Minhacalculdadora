const inputResultado = document.getElementById('Resultado');

const inputClear = document.getElementById('limpar')
inputClear.onclick = function () {
    const value = '';
    inputResultado.value = value
};
const inputApagar = document.getElementById('apagar')
inputApagar.onclick = function () {
    const a = inputResultado.value.replace(/.$/, '');
    inputResultado.value = a;
    

};

const zero0 = document.getElementById('zero');
zero0.onclick = function () {
    const value = String(0);
    inputResultado.value = inputResultado.value + value;
};

const um1 = document.getElementById('um');
um1.onclick = function () {
    const value = String(1);
    inputResultado.value = inputResultado.value + value;
};

const um2 = document.getElementById('dois');
um2.onclick = function () {
    const value = String(2);
    inputResultado.value = inputResultado.value + value;
};

const um3 = document.getElementById('tres');
um3.onclick = function () {
    const value = String(3);
    inputResultado.value = inputResultado.value + value;
};

const um4 = document.getElementById('quatro');
um4.onclick = function () {
    const value = String(4);
    inputResultado.value = inputResultado.value + value;
};

const um5 = document.getElementById('cinco');
um5.onclick = function () {
    const value = String(5);
    inputResultado.value = inputResultado.value + value;
};

const um6 = document.getElementById('seis');
um6.onclick = function () {
    const value = String(6);
    inputResultado.value = inputResultado.value + value;
};

const um7 = document.getElementById('sete');
um7.onclick = function () {
    const value = String(7);
    inputResultado.value = inputResultado.value + value;
};

const um8 = document.getElementById('oito');
um8.onclick = function () {
    const value = String(8);
    inputResultado.value = inputResultado.value + value;
};

const um9 = document.getElementById('nove');
um9.onclick = function () {
    const value = String(9);
    inputResultado.value = inputResultado.value + value;
};

const multipla = document.getElementById('multiplicar')
multipla.onclick = function () {

    inputResultado.value = inputResultado.value + "*";
};

const somarr = document.getElementById('somar')
somarr.onclick = function () {
    inputResultado.value = inputResultado.value + "+";
};

const diminuirr = document.getElementById('diminuir')
diminuirr.onclick = function () {
    inputResultado.value = inputResultado.value + "-";
};

const dividirr = document.getElementById('dividir')
dividirr.onclick = function () {
    inputResultado.value = inputResultado.value + "/";
};

function enter() {
    let numbersString = inputResultado.value.split('+');

    if (numbersString.length > 1) {

        const number = numbersString.map(function (num) {
            return Number(num);
        });

        const resultadoSoma = number[0] + number[1]
        inputResultado.value = resultadoSoma
    };


    numbersString = inputResultado.value.split('-');

    if (numbersString.length > 1) {

        const number = numbersString.map(function (num) {
            return Number(num);
        });

        const resultadoSoma = number[0] - number[1]
        inputResultado.value = resultadoSoma;
    };

    numbersString = inputResultado.value.split('*');

    if (numbersString.length > 1) {

        const number = numbersString.map(function (num) {
            return Number(num);
        });

        const resultadoSoma = number[0] * number[1]
        inputResultado.value = resultadoSoma;
    };

    numbersString = inputResultado.value.split('/');

    if (numbersString.length > 1) {

        const number = numbersString.map(function (num) {
            return Number(num);
        });

        const resultadoSoma = number[0] / number[1]
        inputResultado.value = resultadoSoma;
    };
}

const inputIgual = document.getElementById('igual')
inputIgual.onclick = function () {
   enter();
}

inputResultado.addEventListener('keyup', function (event) {

    if (event.code === 'Enter') {
        enter();

    }
});
