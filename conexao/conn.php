<?php

  $hostname = "sql303.epizy.com";
  $database = "epiz_32731570_refugiopet";
  $user = "epiz_32731570";
  $password = "2jaPVYlymSyH";

   try{
     $pdo = new PDO('mysql:host=' .$hostname.';dbname='.$database, $user, $password);
     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
       echo "Conexão com o Banco de Dados ".$database.", foi bem sucedida!";
   } catch (PDOException $e) {
     echo 'Erro: ' .$e->getMessage();

   }

//   try {
//     $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//      echo 'Conexão realizada com sucesso!';
// } catch (PDOException $e) {
//     echo 'Error: '.$e->getMessage();
// }