function verificar() {
   var data =  new Date()
   var ano =  data.getFullYear()
   var formAno = document.getElementById('ano')
   var res = document.querySelector('div#resp')
   if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[EERO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 10) {
               img.setAttribute('src', 'imagens/homem-crianca.png') 
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/homem-adolescente.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }else {
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mulher-adolescente.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }else {
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
   }
}