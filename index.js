const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/Question');
const cors = require('cors');
const app = express();

require('dotenv').config(); // Carrega variáveis do arquivo .env

app.use(express.json()); // Middleware para parsing de JSON

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
//const uri = 'mongodb+srv://gabrieldcc:Gabriel98$@cluster0.hs43a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });


// Endpoints

// Criar uma nova questão
app.post('/questions', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Verifique o que está sendo enviado
    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (err) {
    console.error('Error:', err); // Exiba o erro no console
    res.status(400).send(err);
  }
});

// Obter todas as questões
app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obter uma questão por ID
app.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).send('Questão não encontrada');
    }
    res.status(200).send(question);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar uma questão por ID
app.put('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!question) {
      return res.status(404).send('Questão não encontrada');
    }
    res.status(200).send(question);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deletar uma questão por ID
app.delete('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).send('Questão não encontrada');
    }
    res.status(200).send('Questão deletada com sucesso');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
