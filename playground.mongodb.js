// Nome do banco de dados
const database = 'ifms1023B';
const collection = 'curso';

// Usar o banco de dados
use(database);

// Criar a coleção
db.createCollection(collection);

// Inserir um documento de exemplo
db.curso.insertOne({
  nome: "agricultura",
  ano: "2025",
    professor: {
    nome: "Erika",
    email: "erika@ifms.edu.br",
    cpf: "123.456.789-00",
    idade: 40
  },
    estudante:
    {
      nome: "João",
      email: "joao@ifms.edu.br",
      cpf: "111.111.111-11",
      idade: 18
    },
})
//informatica

db.curso.insertOne({
  nome: "informatica",
  ano: "2025",
    professor: {
    nome: "livia",
    email: "livia.edu.br",
    cpf: "123.456.789-00",
    idade: 40
  },
    estudante:
    {
      nome: "bianco",
      email: "biancoedu.br",
      cpf: "111.111.111-11",
      idade: 18
    },
})
db.curso.find(
  { nome: "Informática" }
).pretty();
