import express from 'express';
import bodyParser from 'body-parser';

import { Detentos } from './models/detentos';
let app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let detentos = new Detentos();

app.get('/questions', function (req, res) {
  console.log("Get /questions");
  res.send(questions)
});

app.post('/detentos', function (req, res) {
  console.log("Get /detentos");
  detentos.findDetentoByReq(req.body, res);
});

app.get('/detentos/:ind_id', function(req, res) {
  console.log(`Get /detentos/${req.params.ind_id}`);
  detentos.findDetentoById(req.params.ind_id, res);
});

app.post('/detentos/create', function(req, res){
  console.log(req.body);
  detentos.post(req.body, res);
});

let questions = [
  {
    'id': 0,
    'question': 'A cor do cabelo era escuro?',
    'char': null,
    'answers': [
      { 'id': 0, text: 'sim', next: 1},
      { 'id': 1, text: 'nao', next: 2}
  ]
  },
  {
    'id': 1,
    'question': 'Qual era a cor do cabelo escuro?',
    'char': 'indcabelo_ds',
    'answers': [
      {'id': 0, text: 'preto', next: 3},
      {'id': 1, text: 'marrom', next: 3},
      {'id': 2, text: 'loiro escuro', next: 3}
    ]
  },
  {
    'id': 2,
    'question': 'Qual era a cor do cabelo claro?',
    'char': 'indcabelo_ds',
    'answers': [
      {'id': 0, text: 'branco', next: 3},
      {'id': 1, text: 'loiro', next: 3},
      {'id': 2, text: 'outro', next: 3}
    ]
  },
  {
    'id': 3,
    'question': 'Tem tatuagem?',
    'char': 'ind_tp_tatoo',
    'answers': [
      {'id': 0, text: 'sim', next: 99},
      {'id': 1, text: 'nao', next: 99}
    ]
  }
]

/* TESTE
let questions = [{
  'id': 0,
  'question': 'Possuia tatuagem?',
  'char': 'ind_tp_tatoo',
  'answers': [
    {'id': 0, text: 'sim', next: 1},
    {'id': 1, text: 'nao', next: 1}
  ]
},
{
  'id': 1,
  'question': 'Possuia cicatriz?',
  'char': null,
  'answers': [
    {'id': 0, text: 'sim', next: 2},
    {'id': 1, text: 'nao', next: 3}
  ]
},
{
  'id': 2,
  'question': 'Qual tipo de cicatriz?',
  'char': 'ind_tp_scar',
  'answers': [
    {'id': 0, text: 'falta de membro', next: 3},
    {'id': 1, text: 'corte', next: 3},
    {'id': 2, text: 'queimadura', next: 3}
  ]
},
{
  'id': 3,
  'question': 'Qual a cor do cabelo?',
  'char': null,
  'answers': [
    {'id': 0, text: 'escuro', next: 4},
    {'id': 1, text: 'claro', next: 5},
    {'id': 2, text: 'outro', next: 6}
  ]
},
{
  'id': 4,
  'question': 'Qual a tonalidade de escuro?',
  'char': 'indcabelo_ds',
  'answers': [
    {'id': 0, text: 'preto', next: 7},
    {'id': 1, text: 'castanho claro', next: 7},
    {'id': 2, text: 'castanho escuro', next: 7},
    {'id': 3, text: 'ruivo escuro', next: 7}
  ]
},
{
  'id': 5,
  'question': 'Qual a tonalidade de claro?',
  'char': 'indcabelo_ds',
  'answers': [
    {'id': 0, text: 'loiro claro', next: 7},
    {'id': 1, text: 'loiro escuro', next: 7},
    {'id': 2, text: 'cinza', next: 7},
    {'id': 3, text: 'ruivo claro', next: 7}
  ]
},
{
  'id': 6,
  'question': 'Qual tipo?',
  'char': 'indcabelo_ds',
  'answers': [
    {'id': 0, text: 'calvo', next: 7},
    {'id': 1, text: 'indefinido', next: 7}
  ]
},
{
  'id': 7,
  'question': 'Qual a cor da pele?',
  'char': 'indcor_ds',
  'answers': [
    {'id': 0, text: 'clara', next: 99},
    {'id': 1, text: 'parda', next: 99},
    {'id': 2, text: 'escura', next: 99}
  ]
},
{
  'id': 8,
  'question': 'Qual a cor do olho?',
  'char': 'indolhos_ds',
  'answers': [
    {'id': 0, text: 'preto', next: 99},
    {'id': 1, text: 'azul', next: 99},
    {'id': 2, text: 'verde', next: 99},
    {'id': 3, text: 'castanho', next: 99},
    {'id': 4, text: 'marrom', next: 99}
  ]
}]*/

app.listen(8082);
