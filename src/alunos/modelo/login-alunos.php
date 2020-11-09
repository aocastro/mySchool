<?php

    // Iremos conectar nossa função ao banco de dados
    include('../../conexao/conn.php');

    $id = $_REQUEST['id'];
    $senha = $_REQUEST['senha'];
    $senha = md5($senha);

    // Criar uma query de consulta ao banco de dados
    $sql = "SELECT * FROM alunos WHERE id = ".$id." AND senha = '".$senha."'";

    // Agora iremos executar nossa query SQL
    $resultado = mysqli_query($conecta, $sql);

    if($resultado && mysqli_num_rows($resultado)>0){

        // Criaremos a função para guardar os dados do usuário logado
        while($list = mysqli_fetch_array($resultado)){
            // Iniciar uma sessão do navegador para armazenar constantes
            session_start();
            // Declaração das sessões constantes em nosso sistema
            $_SESSION['id'] = $list['id'];
            $_SESSION['nome'] = $list['nome'];
            $_SESSION['tipo'] = $list['tipo'];
        }

        $dados = array('result' => true);
        
    }else{
        $dados = array('result' => false);
    }

    echo json_encode($dados);