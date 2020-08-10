$(document).ready(function() {

    // Criar uam função para monitorar o click em cima do botão com classe btn-save
    $('.btn-save').click(function(e) {
        e.preventDefault()

        // Iremos coletar todas as informações digitadas no formulário
        var dados = $('#adiciona-disciplinas').serialize()

        // Criar uma requisição AJAX assincrona
        $.ajax({
            type: 'POST', //É o como as informações serão enviadas ao PHP
            dataType: 'JSON', //É o modo de transição de dados entre a visão e modelo
            assync: true, //É somente para demonstrar que a requisão será assíncrona
            data: dados, //É as informações que serão enviadas ao PHP
            url: 'src/disciplinas/modelo/adiciona-disciplinas.php', //É para onde irá as informações
            success: function(dados) {
                // Demonstrar se deu certo ou errado...
                $('#adiciona-disciplinas').after(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                `)

                // Limpando os campos do nosso formulário
                $('#disciplina').val('')
                $('#professor').val('')
            }
        })
    })
})