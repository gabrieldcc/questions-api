const mongoose = require('mongoose');
const Question = require('./models/Question'); // Certifique-se de que o schema está correto

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://gabrieldcc:Gabriel98$@cluster0.hs43a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso SCRIPT SUBIDA DB!');
    seedDatabase();  // Após conectar, chama a função para inserir os dados
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Função para inserir as perguntas no banco de dados
const seedDatabase = async () => {
  try {
    // Remover todas as perguntas existentes (opcional)
    await Question.deleteMany({});
    console.log('Todas as questões anteriores foram removidas.');

    // Inserir novas perguntas
    await Question.insertMany(questions);
    console.log('Perguntas inseridas com sucesso!');
    
    // Fechar a conexão após a inserção
    mongoose.connection.close();
  } catch (error) {
    console.error('Erro ao inserir perguntas:', error);
  }
};


const questions = [
    {
      question: 'O que é a AWS?',
      options: ['Serviço de armazenamento', 'Plataforma de serviços de nuvem', 'Banco de dados', 'Sistema operacional'],
      answer: 'Plataforma de serviços de nuvem'
    },
    {
      question: 'Qual dos serviços abaixo é um serviço de computação?',
      options: ['Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Amazon CloudFront'],
      answer: 'Amazon EC2'
    },
    {
      question: 'O que é Amazon S3?',
      options: ['Serviço de armazenamento de objetos', 'Serviço de banco de dados', 'Serviço de DNS', 'Serviço de computação'],
      answer: 'Serviço de armazenamento de objetos'
    },
    {
      question: 'O que é Amazon RDS?',
      options: ['Serviço de computação', 'Serviço de armazenamento', 'Serviço de banco de dados gerenciado', 'Serviço de rede'],
      answer: 'Serviço de banco de dados gerenciado'
    },
    {
      question: 'Qual serviço é usado para gerenciar containers?',
      options: ['Amazon ECS', 'Amazon RDS', 'Amazon S3', 'Amazon DynamoDB'],
      answer: 'Amazon ECS'
    },
    {
      question: 'Qual serviço oferece escalabilidade automática?',
      options: ['Amazon EC2', 'Amazon RDS', 'Auto Scaling', 'AWS Lambda'],
      answer: 'Auto Scaling'
    },
    {
      question: 'O que é o Amazon DynamoDB?',
      options: ['Serviço de armazenamento de objetos', 'Banco de dados NoSQL', 'Serviço de cache', 'Serviço de DNS'],
      answer: 'Banco de dados NoSQL'
    },
    {
      question: 'O que é o AWS Lambda?',
      options: ['Serviço de computação sem servidor', 'Banco de dados relacional', 'Serviço de rede', 'Serviço de análise'],
      answer: 'Serviço de computação sem servidor'
    },
    {
      question: 'O que é Amazon CloudFront?',
      options: ['Serviço de CDN', 'Serviço de computação', 'Serviço de banco de dados', 'Serviço de DNS'],
      answer: 'Serviço de CDN'
    },
    {
      question: 'Qual serviço oferece monitoramento e logging?',
      options: ['Amazon CloudWatch', 'Amazon EC2', 'Amazon RDS', 'AWS Lambda'],
      answer: 'Amazon CloudWatch'
    }
  ];

  