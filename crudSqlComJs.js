/* é necessario, inicialmente realizar a criação do banco de dados, para realizar a inserção , consulta, atualização e deleção dos dados 
## Criando Banco de dados ##

 Comando para configurar o usuario: 
     -h localhost -u root -p

 Comando para criação do banco de dados: 
    CREATE DATABASE crudMysql

 Comando para criação de tabelas e seus atributos: 
        CREATE TABLE usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
    );

## Instalção da bibioteca para comunicação com o banco de dados ## 

Comando a ser realizado no console: 
        npm install mysql2
    
*/

// CRUD 

const mysql = require('mysql2'); // importando a biblioteca para conexão  com o banco de dados 


//Realizando a autenticação do banco de dados
const connection = mysql.createConnection({  
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'crudMysql'
});

// Cadastrando um usuario 
const novoUsuario = { 
    nome: 'Pedro Acacio', 
    email: 'dev.akcio@gmail.com'
}

// ####  CREATE #####


connection.query('INSERT INTO usuarios SET ?', novoUsuario, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Novo usuário criado com sucesso!');
    }
  });
// Utilizando o método “query” da biblioteca “mysql2” para executar a consulta SQL de inserção.


// ##### READ #####  

  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Registros encontrados:');
      console.log(results);
    }
  });
// Neste exemplo, utilizamos o comando SQL “SELECT * FROM usuarios” para recuperar todos os registros da tabela “usuarios”.
// O resultado da consulta é retornado no parâmetro “results” da função de callback.


// ##### Update ##### 

  const id = 2 // Defina o ID do usuário que você deseja atualizar

  const usuarioAtualizado = {
    
    nome: 'Novo Nome',
    email: 'novoemail@example.com'
  };

  connection.query('UPDATE usuarios SET ? WHERE id = ?', [usuarioAtualizado, id], (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Usuário atualizado com sucesso!');
    }
  });
  // Neste exemplo, criamos um objeto “usuarioAtualizado” com os novos valores dos campos “nome” e “email” que desejamos
  // atualizar na tabela “usuarios”. Utilizamos o comando SQL “UPDATE usuarios SET ? WHERE id = ?” para atualizar o registro com base no ID fornecido.


  // #### Delete #### 

  const idDoUsuario = 2;

  connection.query('DELETE FROM usuarios WHERE id = ?', idDoUsuario, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Usuário excluído com sucesso!');
    }
  });

  //Neste exemplo, utilizamos o comando SQL “DELETE FROM usuarios WHERE id = ?” para excluir o registro com base no ID fornecido.


  connection.end(); // finalizando a conexão


  /* ### OUTPOT ### 

                Novo usuário criado com sucesso!
                Registros encontrados:
                [
                  { id: 2, nome: 'Novo Nome', email: 'novoemail@example.com' },
                  { id: 3, nome: 'Pedro Acacio', email: 'dev.akcio@gmail.com' },
                  { id: 4, nome: 'Pedro Acacio', email: 'dev.akcio@gmail.com' }
                ]
                Usuário atualizado com sucesso!
                Usuário excluído com sucesso!
  
  */