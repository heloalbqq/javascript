function tabuada() {
    let numero = document.getElementById('num')
    let tab = document.getElementById('tabuada')

    if(numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}