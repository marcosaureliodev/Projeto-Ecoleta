// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db //module.export é usada para exporta o objeto db

// utilizar o objeto de banco de dados, para nossa operações
//db.serialize(() => {

//   //Com comandos SQL eu irei:

//   // 1 Criar uma tabela
//   db.run(`
//           CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//       );
//   `)

//   // 2 Inserir dados na tabela
//   const query = `
//           INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//           ) VALUES (?,?,?,?,?,?,?);
//     `

//   const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papeis e Papelão"
//   ]

  // function afterInsertData(err) {
  //     if(err) {
  //         return console.log(err)
  //     }

  //     console.log("Cadastro com sucesso")
  //     console.log(this)
  // }

  // db.run(query, values, afterInsertData) //db.run usado para inserir dados na tabela

  // 3 Consultar dados na tabela
  // db.all(`SELECT name FROM places`, function(err, rows) {
  //     if(err) {
  //       return console.log(err)
  //     }

  //     console.log("Aqui estão seus registros: ")
  //     console.log(rows)
  // })


  // 4 Deletar um dado na tabela
  // db.run(`DELETE FROM PLACES WHERE id = ?`, [13], function(err) {
  //     if(err) {
  //       return console.log(err)
  //     }

  //     console.log("Registro deletado com sucesso!")
  // })

//})

/* 
Comando para execução do banco de dados 
node src/database/db.js 
*/