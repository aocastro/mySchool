<?php

    // Demonstre todos os erros e alertas existentes quando ao meu código e quanto a interação com o B.D.
    // Os dois comandos a seguir são comandos de configuração... do nosso servidor APACHE
    ini_set('display_erros', true);
    error_reporting(E_ALL);

    // Crição das variáveis para conexão com o banco de dados
    $hostname = "localhost";
    $database = "myschool";
    $username = "root";
    $password = "";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
        // echo 'Conectado ao banco de dados '.$database.'.....';
    } else {
        echo 'Erro: '.mysqli_connect_error();
    }

