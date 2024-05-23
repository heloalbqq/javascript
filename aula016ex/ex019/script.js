let numero = document.getElementById('num')
let tab = document.getElementById('tabela')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        item.value = `tab${numero.value}`
        tab.appendChild(item)
        numero.value = ''  // Limpa o campo de entrada após adicionar
        numero.focus()     // Coloca o foco de volta no campo de entrada
    } else {
        alert('[ERRO] valor inválido ou já adicionado.')
    }
}