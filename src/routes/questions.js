const express = require('express');
const router = express.Router()
//const Question = require('../../models/Question');
const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} = require('./../controllers/questionsController')

console.log(createQuestion); // Deve exibir [Function: createQuestion]


// Definir as rotas
router.post('/questions', createQuestion);
router.get('/questions', getAllQuestions);
router.get('/questions/:id', getQuestionById);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

// router.post('/questions', async (req, res) => {
//     try {
//       console.log('Request Body:', req.body); // Verifique o que está sendo enviado
//       const question = new Question(req.body);
//       await question.save();
//       res.status(201).send(question);
//     } catch (err) {
//       console.error('Error:', err); // Exiba o erro no console
//       res.status(400).send(err);
//     }
//   });

  
// //   // Obter todas as questões
//   router.get('/questions', async (req, res) => {
//     try {
//       const questions = await Question.find();
//       res.status(200).send(questions);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });
  
//   // Obter uma questão por ID
//   router.get('/questions/:id', async (req, res) => {
//     try {
//       const question = await Question.findById(req.params.id);
//       if (!question) {
//         return res.status(404).send('Questão não encontrada');
//       }
//       res.status(200).send(question);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });
  
//   // Atualizar uma questão por ID
//   router.put('/questions/:id', async (req, res) => {
//     try {
//       const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       if (!question) {
//         return res.status(404).send('Questão não encontrada');
//       }
//       res.status(200).send(question);
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });
  
//   // Deletar uma questão por ID
//   router.delete('/questions/:id', async (req, res) => {
//     try {
//       const question = await Question.findByIdAndDelete(req.params.id);
//       if (!question) {
//         return res.status(404).send('Questão não encontrada');
//       }
//       res.status(200).send('Questão deletada com sucesso');
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

  module.exports = router; 