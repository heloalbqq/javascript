let num = document.querySelector('#num')
let tab = document.querySelector('#tabela')
let res = document.querySelector('#res')
let valores = []

function adicionar(){
    let n = Number(num.value)

    if (n >= 1 && n <= 100 && !valores.includes(n)) {
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `tab${n}`
        tab.appendChild(item)
        num.value = ''
        num.focus()
    } else {
        alert('[ERRO] Valor inválido ou já adicionado.')
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] Adicione um número')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]

            if(maior < valores[pos]){
                maior = valores[pos]
            } else if (menor > valores[pos]){
                menor = valores[pos]
            }

            media = soma / total
        }
            res.innerHTML += `<p>Ao todo temos ${total} números adicionados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
    }

    
}

    