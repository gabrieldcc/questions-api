const express = require('express');
const mongoose = require('mongoose');
const healthCheck = require('./healthCheck'); 
const cors = require('cors');
const questionsRoutes = require('./src/routes/questions')
require('dotenv').config(); // Carrega variáveis do arquivo .env

const app = express();


app.use(express.json()); // Middleware para parsing de JSON
app.use('/', questionsRoutes); // Roteador para /questions
app.use('/health', healthCheck);  // Configuração do middleware de health check


// Configuração do CORS
app.use(cors({
  origin: '*', // Permite requisições de qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));


// Configuração da conexão com o MongoDB
 const uri = process.env.MONGO_URI 

 if (!uri) {
  console.error('MONGO_URI não está definida no arquivo .env');
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });


// // Endpoints

// // Criar uma nova questão
// app.post('/questions', async (req, res) => {
//   try {
//     console.log('Request Body:', req.body); // Verifique o que está sendo enviado
//     const question = new Question(req.body);
//     await question.save();
//     res.status(201).send(question);
//   } catch (err) {
//     console.error('Error:', err); // Exiba o erro no console
//     res.status(400).send(err);
//   }
// });

// Obter todas as questões
// app.get('/questions', async (req, res) => {
//   try {
//     const questions = await Question.find();
//     res.status(200).send(questions);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Obter uma questão por ID
// app.get('/questions/:id', async (req, res) => {
//   try {
//     const question = await Question.findById(req.params.id);
//     if (!question) {
//       return res.status(404).send('Questão não encontrada');
//     }
//     res.status(200).send(question);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Atualizar uma questão por ID
// app.put('/questions/:id', async (req, res) => {
//   try {
//     const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!question) {
//       return res.status(404).send('Questão não encontrada');
//     }
//     res.status(200).send(question);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Deletar uma questão por ID
// app.delete('/questions/:id', async (req, res) => {
//   try {
//     const question = await Question.findByIdAndDelete(req.params.id);
//     if (!question) {
//       return res.status(404).send('Questão não encontrada');
//     }
//     res.status(200).send('Questão deletada com sucesso');
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


// Iniciar o servidor
  // Fazer uma requisição à rota de health check
  // axios.get(`http://localhost:3000/health`)
  //   .then(response => {
  //     console.log('Health check OK:', response.data);
  //   })
  //   .catch(error => {
  //     if (error.response) {
  //       // A resposta foi recebida do servidor, mas o status é diferente de 2xx
  //       console.error(`Erro no health check - Status: ${error.response.status}`);
  //       console.error('Headers:', error.response.headers);
  //       console.error('Data:', error.response.data);
  //     } else if (error.request) {
  //       // A requisição foi feita mas nenhuma resposta foi recebida
  //       console.error('Nenhuma resposta recebida:', error.request);
  //     } else {
  //       // Algo aconteceu durante a configuração da requisição
  //       console.error('Erro ao configurar a requisição:', error.message);
  //     }
  //     console.error('Config:', error.config); // Detalhes da configuração da requisição
  //   });

