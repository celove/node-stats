const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models/index.js');
const path = require('path');
const stats_jogos = require('./models/stats_jogos.js');
const cors = require('cors');
const port = process.env.PORT || 3000;
const { Op } = require("sequelize");
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Stats-tracker listening on port ${port}!`));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

app.use(cors());

app.get('/get', function (req, res) {
    db.stats_jogos.findAll({order: [['createdAt', 'DESC']], limit: 15 })
        .then(jogosObj => {
            res.send(jogosObj);
        });
});


app.get('/getJogadorTime', function (req, res) {
    console.log(req.query);
    db.stats_jogos.findAll({ where: {[Op.or]:
        [
            {
                [Op.and]: [{jogador1: req.query.jogador1},{time1: req.query.time1}]
            },
            {
                [Op.and]: [{jogador2: req.query.jogador1},{time2: req.query.time1}]
            }]
    }, order: [['createdAt', 'DESC']], limit: 15 })
        .then(jogosObj => {
            res.send(jogosObj);
        });
});


app.post('/cadastroJogo', function (req, res) {
    console.log(req.body);
    const jogoAux = {
        jogador1: req.body.jogador1, jogador2: req.body.jogador2,
        time1: req.body.time1, time2: req.body.time2,
        gols1: req.body.gols1, gols2: req.body.gols2
    };
    const jogo = db.stats_jogos.create(req.body).then(() => {
        res.send(jogoAux);
    });
    console.log(jogo.jogador1);
});

app.post('/url', function (req, res) {
    console.log(req.body);
    const jogoAux = {
        jogador1: req.body.jogador1, jogador2: req.body.jogador2,
        time1: req.body.time1, time2: req.body.time2,
        gols1: req.body.gols1, gols2: req.body.gols2
    };
    const jogo = db.stats_jogos.create(req.body).then(() => {
        res.send(jogoAux);
    });
    console.log(jogo.jogador1);
});