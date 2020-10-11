function carregarConteudo(){
    let calc = document.querySelector('div.calculadora'),
        elementos = {};
        
    calc.querySelectorAll('button')
                .forEach(item => {
                    elementos[item.innerText] = item
                })
    elementos['calc'] = calc
    return elementos
}