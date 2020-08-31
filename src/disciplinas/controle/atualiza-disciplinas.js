$(document).ready(function() {

    // Criar uam função para monitorar o click em cima do botão com classe btn-save
    $('.btn-update').click(function(e) {
        e.preventDefault()

        // Iremos coletar todas as informações digitadas no formulário
        var dados = $('#adiciona-disciplinas').serialize()

        // Criar uma requisição AJAX assincrona
        $.ajax({
            type: 'POST', //É o como as informações serão enviadas ao PHP
            dataType: 'JSON', //É o modo de transição de dados entre a visão e modelo
            assync: true, //É somente para demonstrar que a requisão será assíncrona
            data: dados, //É as informações que serão enviadas ao PHP
            url: 'src/disciplinas/modelo/atualiza-disciplinas.php', //É para onde irá as informações
            success: function(dados) {
                if (dados.return == true) {
                    $('#form').empty()
                    $('#form').hide()
                    $('tbody').empty() //Limpando a tabela
                    $('body').append('<script src="src/disciplinas/controle/list-disciplinas.js"></script>') //recarregando a tabela
                    $('.row').show()
                } else {
                    alert('Deu algo errado!')
                }
            }
        })
    })
})