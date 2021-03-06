$(document).ready(function() {

    // Monitorar o clique em cima dos botões com a classe btn-view
    $('.btn-delete').on('click', function(e) {
        e.preventDefault()

        // Criando uma variável para coletar o ID do botão clicado
        // Desenvolvo uma hash e juntamente com ela eu coleto o id do botão clicado com a função this
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/delete-alunos.php',
            success: function(dados) {
                // Limpo a nossa div chamada FORM para receber o retorno do delete-dsiciplinas.php
                $('#form').empty()

                // Incluímos o retorno do JSON na DIV
                $('#form').append(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                `)

                // Limpamos o corpo da nossa tabela
                $('tbody').empty()

                // Atualizamos nossa tabela
                $('body').append('<script src="src/alunos/controle/list-alunos.js"></script>')

            }
        })

    })

})