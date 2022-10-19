<?php

    include('conexao/conn.php');

    //Obter os dados do formulário html
    $requestData = $_REQUEST;

    //Verificação de campos obrigatórios
    if(empty($requestData['nome'])){
        //Caso a variavel vier vazia, retornar erro
        $dados = array(
            "tipo" => 'erro',
            "mensagem" => 'Existem campos obrigatórios não preenchidos.'
        );
    } else{
    //Caso os campos vierem preenchidos, realizar o cadastro
        $ID = isset($requestData['idraca']) ? $requestData['idraca'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
    
    // Verificação  para cadastro ou realização de registro
        if($operacao == 'insert') {
            //Comandos para o INSERT no banco de dados ocorrerem
            try {
                $stmt = $pdo->prepare('INSERT INTO raca (nome) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => ($requestData['nome'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro salvo com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'erro',
                    "mensagem" => 'Não foi possível salvar o registro: ' .$e
                );
            }
        } else {
            //Se a nossa operação vier vazia, realizar UPDATE
            try {
                $stmt = $pdo->prepare('UPDATE RACA SET NOME = :a WHERE IDRACA = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => ($requestData['nome'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'erro',
                    "mensagem" => 'Não foi possível atualizar o registro: ' .$e
                );
            }
        }    
    }

    //Converter o nosso array de retorno em uma representação JSON
    echo json_encode($dados);