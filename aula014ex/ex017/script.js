function contar() {
    let start = document.getElementById('inicio')
    let end = document.getElementById('fim')
    let pulo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(start.value.length == 0 || end.value.length == 0 || pulo.value.length == 0) {
        window.alert('[ERRO] Coloque algum número.')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(pulo.value)

        if (p <= 0) {
            alert('Passo INVÁLIDO! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {  //CONTAGEM CRESCENTE
           for(let contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
    
        } else {  //CONTAGEM DECRESCENTE
            for(let contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
                 
        }
        res.innerHTML += `\u{1F3C1}`
    }
 
}