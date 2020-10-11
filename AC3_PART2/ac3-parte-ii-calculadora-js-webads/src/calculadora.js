const bNumeros = document.querySelectorAll('.numero')
const bOperacoes = document.querySelectorAll('.operacao')
const resultado = document.querySelector('#resultado')
const bIgual = document.querySelector('.resultar')
let teste = -1

const tipoOperacao = function(expressao) {
    let operacoes = ['+', '-', '*', '/']
    let indice = -1
    for (let operacao of operacoes) {
        indice = expressao.indexOf(operacao)
        if(indice !== -1){
            return operacao
        }
    }
    return null
}

for(let btnNumero of bNumeros) {
    btnNumero.addEventListener('click', function() {
        let numero = btnNumero.textContent
        let r = resultado.value
        
        if(numero === '.'){
            if(r.length === 0){
                teste = -1
            }
            if(teste === -1){
                resultado.value += numero
                teste = 0
            } 
        } else {
            resultado.value += numero
        }
    })
}

for(let btnOperacao of bOperacoes) {
    //if(resultado.indexOf)
    btnOperacao.addEventListener('click', function() {
            let operacao = btnOperacao.textContent
            if(resultado.value !== ''){
                let r = resultado.value
                    if((r.indexOf('+') || r.indexOf('-') || r.indexOf('*') || r.indexOf('/')) < 1){
                        resultado.value += operacao
                        teste = -1
                    }
            }
        })
}

bIgual.addEventListener('click', function() {
    let expressao = resultado.value
    let operacao = tipoOperacao(expressao)
    let numeros = expressao.split(operacao)
    let n1 = parseFloat(numeros[0])
    let n2 = parseFloat(numeros[1])
    let conta = null
    if (n2 !== ""){
        if(operacao === '+') {
            conta = n1 + n2
        } else if (operacao === '-'){
            conta = n1 - n2
        } else if (operacao === '*'){
            conta = n1 * n2
        } else if (operacao === '/'){
            conta = n1 / n2
        } else {
            conta = expressao
        }
    } 
    resultado.value = conta 
})