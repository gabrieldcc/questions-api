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
      answer: 'Plataforma de serviços de nuvem',
      explanation: 'A AWS (Amazon Web Services) é uma plataforma de serviços de computação em nuvem oferecida pela Amazon que fornece uma ampla gama de serviços, como computação, armazenamento e banco de dados.'
    },
    {
      question: 'Qual é a principal vantagem da computação em nuvem?',
      options: ['Custo fixo', 'Escalabilidade sob demanda', 'Maior uso de energia', 'Manutenção obrigatória'],
      answer: 'Escalabilidade sob demanda',
      explanation: 'A computação em nuvem permite que as empresas aumentem ou diminuam os recursos de acordo com as necessidades de maneira flexível e econômica.'
    },
    {
      question: 'O que significa o conceito de "pagamento conforme o uso" na AWS?',
      options: ['Pagar por recursos antecipadamente', 'Pagar apenas pelos recursos que você usa', 'Custo fixo mensal', 'Pagamento adiantado por todos os serviços'],
      answer: 'Pagar apenas pelos recursos que você usa',
      explanation: 'Com o modelo "pay-as-you-go" da AWS, você paga apenas pelos serviços e recursos que consumir, sem custo inicial ou contrato a longo prazo.'
    },
    {
      question: 'Qual serviço da AWS é usado para armazenar objetos, como arquivos e imagens?',
      options: ['Amazon S3', 'Amazon RDS', 'Amazon EC2', 'AWS Lambda'],
      answer: 'Amazon S3',
      explanation: 'O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos que permite armazenar e recuperar grandes quantidades de dados em qualquer lugar da web.'
    },
    {
      question: 'O que é o Amazon EC2?',
      options: ['Serviço de banco de dados', 'Serviço de computação em nuvem', 'Serviço de mensagens', 'Serviço de gerenciamento de chaves'],
      answer: 'Serviço de computação em nuvem',
      explanation: 'Amazon EC2 (Elastic Compute Cloud) fornece capacidade de computação escalável na nuvem para rodar aplicações em máquinas virtuais.'
    },
    {
      question: 'Qual serviço da AWS permite a criação de um banco de dados relacional?',
      options: ['Amazon RDS', 'Amazon EC2', 'Amazon S3', 'AWS Lambda'],
      answer: 'Amazon RDS',
      explanation: 'O Amazon RDS (Relational Database Service) facilita a configuração, operação e escalabilidade de um banco de dados relacional na nuvem.'
    },
    {
      question: 'O que é o AWS Lambda?',
      options: ['Serviço de banco de dados', 'Serviço de armazenamento', 'Serviço de computação sem servidor', 'Serviço de monitoramento'],
      answer: 'Serviço de computação sem servidor',
      explanation: 'O AWS Lambda permite executar código sem provisionar ou gerenciar servidores, com uma cobrança baseada no tempo de execução do código.'
    },
    {
      question: 'Qual serviço da AWS permite gerenciar identidades e permissões?',
      options: ['Amazon S3', 'AWS IAM', 'Amazon RDS', 'Amazon EC2'],
      answer: 'AWS IAM',
      explanation: 'O AWS IAM (Identity and Access Management) permite controlar quem pode acessar seus recursos da AWS e em que condições.'
    },
    {
      question: 'O que é o Amazon CloudFront?',
      options: ['Serviço de CDN', 'Serviço de computação', 'Serviço de armazenamento', 'Serviço de segurança'],
      answer: 'Serviço de CDN',
      explanation: 'O Amazon CloudFront é uma rede de distribuição de conteúdo (CDN) que entrega dados, vídeos, aplicações e APIs a clientes globalmente com baixa latência.'
    },
    {
      question: 'O que é o Amazon VPC?',
      options: ['Serviço de rede virtual', 'Serviço de armazenamento', 'Serviço de banco de dados', 'Serviço de segurança'],
      answer: 'Serviço de rede virtual',
      explanation: 'Amazon VPC (Virtual Private Cloud) permite criar uma rede virtual dedicada dentro da AWS, onde você pode controlar completamente seu ambiente de rede.'
    },
    {
      question: 'Qual serviço é usado para gerenciar logs na AWS?',
      options: ['Amazon CloudWatch', 'Amazon S3', 'Amazon RDS', 'AWS Lambda'],
      answer: 'Amazon CloudWatch',
      explanation: 'O Amazon CloudWatch monitora e coleta dados de logs e métricas de recursos da AWS e aplicativos, permitindo que você configure alertas e veja o desempenho.'
    },
    {
      question: 'O que é o AWS Elastic Beanstalk?',
      options: ['Serviço de banco de dados', 'Serviço de armazenamento', 'Plataforma de implantação de aplicações', 'Serviço de CDN'],
      answer: 'Plataforma de implantação de aplicações',
      explanation: 'O AWS Elastic Beanstalk facilita a implantação e gerenciamento de aplicações na nuvem, automatizando o provisionamento de infraestrutura e manuseio do código.'
    },
    {
      question: 'Qual serviço AWS é usado para automação de infraestrutura como código?',
      options: ['AWS CloudFormation', 'AWS IAM', 'Amazon S3', 'Amazon CloudFront'],
      answer: 'AWS CloudFormation',
      explanation: 'O AWS CloudFormation permite criar e gerenciar recursos da AWS usando arquivos de modelo declarativos, automatizando a configuração e o gerenciamento da infraestrutura.'
    },
    {
      question: 'Qual serviço da AWS oferece um banco de dados NoSQL gerenciado?',
      options: ['Amazon DynamoDB', 'Amazon RDS', 'AWS IAM', 'Amazon EC2'],
      answer: 'Amazon DynamoDB',
      explanation: 'O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e previsível, além de escalabilidade automática.'
    },
    {
      question: 'O que é o Amazon Route 53?',
      options: ['Serviço de DNS', 'Serviço de armazenamento', 'Serviço de segurança', 'Serviço de rede virtual'],
      answer: 'Serviço de DNS',
      explanation: 'Amazon Route 53 é um serviço de DNS escalável e altamente disponível que roteia o tráfego dos usuários para aplicações hospedadas na AWS.'
    },
    {
      question: 'Qual é o objetivo do Amazon RDS Multi-AZ?',
      options: ['Aumentar o desempenho do banco de dados', 'Melhorar a alta disponibilidade', 'Reduzir o custo de armazenamento', 'Automatizar backups'],
      answer: 'Melhorar a alta disponibilidade',
      explanation: 'O RDS Multi-AZ replica automaticamente seus dados para outra zona de disponibilidade, garantindo alta disponibilidade e failover automatizado.'
    },
    {
      question: 'O que é o Amazon S3 Glacier?',
      options: ['Serviço de arquivamento de dados', 'Serviço de banco de dados', 'Serviço de computação', 'Serviço de rede'],
      answer: 'Serviço de arquivamento de dados',
      explanation: 'Amazon S3 Glacier é um serviço de armazenamento de baixo custo para arquivamento de dados, usado para armazenar informações que raramente são acessadas.'
    },
    {
      question: 'Qual é a finalidade do Amazon Elastic Load Balancing (ELB)?',
      options: ['Distribuir tráfego de rede', 'Armazenar dados', 'Gerenciar backups', 'Monitorar aplicações'],
      answer: 'Distribuir tráfego de rede',
      explanation: 'O Amazon ELB distribui automaticamente o tráfego de entrada de uma aplicação entre várias instâncias do Amazon EC2, ajudando a garantir alta disponibilidade.'
    },
    {
      question: 'O que é o Amazon EBS?',
      options: ['Serviço de armazenamento em bloco', 'Serviço de banco de dados', 'Serviço de segurança', 'Serviço de DNS'],
      answer: 'Serviço de armazenamento em bloco',
      explanation: 'O Amazon EBS (Elastic Block Store) é um serviço de armazenamento em bloco persistente usado com o Amazon EC2 para armazenamento de dados.'
    },
    {
      question: 'Qual serviço da AWS é recomendado para implementar CI/CD?',
      options: ['AWS CodePipeline', 'Amazon CloudFront', 'Amazon S3', 'Amazon RDS'],
      answer: 'AWS CodePipeline',
      explanation: 'O AWS CodePipeline é um serviço que automatiza o fluxo de trabalho de entrega contínua (CI/CD), permitindo que você modele, configure e execute pipelines de implementação.'
    },
    {
        question: 'O que é o Amazon SNS?',
        options: ['Serviço de notificação por push', 'Serviço de armazenamento', 'Serviço de monitoramento', 'Serviço de banco de dados'],
        answer: 'Serviço de notificação por push',
        explanation: 'O Amazon SNS (Simple Notification Service) permite o envio de mensagens de notificação para usuários ou serviços por meio de push, SMS ou e-mail.'
      },
      {
        question: 'Qual serviço AWS permite hospedar sites estáticos?',
        options: ['Amazon S3', 'Amazon RDS', 'Amazon DynamoDB', 'AWS Lambda'],
        answer: 'Amazon S3',
        explanation: 'O Amazon S3 pode ser configurado para hospedar sites estáticos, permitindo a entrega de páginas HTML, CSS, JavaScript e outros arquivos estáticos.'
      },
      {
        question: 'O que é o Amazon SQS?',
        options: ['Serviço de filas de mensagens', 'Serviço de armazenamento', 'Serviço de DNS', 'Serviço de monitoramento'],
        answer: 'Serviço de filas de mensagens',
        explanation: 'O Amazon SQS (Simple Queue Service) é um serviço de filas de mensagens gerenciado, que permite o desacoplamento de componentes de sistemas distribuídos.'
      },
      {
        question: 'O que é o AWS Auto Scaling?',
        options: ['Serviço para ajustar automaticamente os recursos', 'Serviço de monitoramento', 'Serviço de banco de dados', 'Serviço de gerenciamento de chaves'],
        answer: 'Serviço para ajustar automaticamente os recursos',
        explanation: 'O AWS Auto Scaling ajusta automaticamente a capacidade de seus serviços de acordo com a demanda, garantindo que suas aplicações tenham os recursos necessários sem desperdício.'
      },
      {
        question: 'Qual é o propósito do AWS CloudTrail?',
        options: ['Monitorar e auditar ações de API', 'Armazenar dados em tempo real', 'Gerenciar segurança de rede', 'Fazer backup de dados'],
        answer: 'Monitorar e auditar ações de API',
        explanation: 'O AWS CloudTrail registra as chamadas de API para sua conta da AWS, fornecendo uma trilha de auditoria das atividades de usuários e serviços.'
      },
      {
        question: 'O que é o AWS Direct Connect?',
        options: ['Serviço de conexão dedicada entre sua rede local e a AWS', 'Serviço de banco de dados', 'Serviço de CDN', 'Serviço de monitoramento'],
        answer: 'Serviço de conexão dedicada entre sua rede local e a AWS',
        explanation: 'O AWS Direct Connect oferece uma conexão de rede dedicada entre sua infraestrutura local e a AWS, proporcionando maior largura de banda e segurança.'
      },
      {
        question: 'Qual serviço permite criar redes isoladas logicamente na AWS?',
        options: ['Amazon VPC', 'Amazon RDS', 'Amazon CloudFront', 'AWS Lambda'],
        answer: 'Amazon VPC',
        explanation: 'O Amazon VPC (Virtual Private Cloud) permite que você crie uma rede privada virtual dentro da AWS, isolada logicamente de outras redes, com controle total sobre sua configuração de rede.'
      },
      {
        question: 'Qual serviço é usado para gerenciar chaves de criptografia na AWS?',
        options: ['AWS KMS', 'Amazon S3', 'Amazon RDS', 'Amazon EC2'],
        answer: 'AWS KMS',
        explanation: 'O AWS KMS (Key Management Service) permite criar, gerenciar e controlar o uso de chaves de criptografia usadas para proteger seus dados na AWS.'
      },
      {
        question: 'Qual serviço da AWS é usado para fornecer controle de acesso federado?',
        options: ['AWS IAM', 'Amazon EC2', 'Amazon S3', 'Amazon CloudWatch'],
        answer: 'AWS IAM',
        explanation: 'O AWS IAM permite criar políticas de controle de acesso detalhadas e oferece suporte para autenticação federada, permitindo que você use provedores de identidade externos.'
      },
      {
        question: 'O que é o AWS OpsWorks?',
        options: ['Serviço de gerenciamento de configuração', 'Serviço de CDN', 'Serviço de monitoramento', 'Serviço de rede'],
        answer: 'Serviço de gerenciamento de configuração',
        explanation: 'O AWS OpsWorks é um serviço de gerenciamento de configuração que permite automatizar tarefas de implantação e gerenciamento de aplicativos usando Chef ou Puppet.'
      }
  ]
  
