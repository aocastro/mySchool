$(document).ready(function() {

    // Criando uma função para adionar o formulario de cadastro na tela pelo botão #add-disciplina
    $('#add-disciplina').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/adiciona-disciplinas.html')
    })

})