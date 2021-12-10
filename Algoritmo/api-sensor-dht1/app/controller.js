const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();
const db = require('./connection');

router.get('/temperature', (request, response, next) => {

    let sum = ArduinoData.ListTemp.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.ListTemp.length).toFixed(2);

    response.json({
        data: ArduinoData.ListTemp,
        total: ArduinoData.ListTemp.length,
        average: isNaN(average) ? 0 : average,
    });

});

router.get('/humidity', (request, response, next) => {

    let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.List.length).toFixed(2);

    response.json({
        data: ArduinoData.List,
        total: ArduinoData.List.length,
        average: isNaN(average) ? 0 : average,
    });

});

router.post('/sendData', (request, response) => {
    let local = ['Sorocaba', 'São Paulo', 'Poá', 'Ribeirão Pires', 'Campos do Jordão', 'Vista Alegre', 'Avenida Paulista', 'Jardins', 'Oscar Freire', 'Faria Lima']
    temperatura = ArduinoData.ListTemp[ArduinoData.ListTemp.length - 1];
    let temperaturaVar = 0;
    if (temperatura == null) {
        temperaturaVar = 0;
    }else {
        temperaturaVar = parseFloat(temperatura);
    }
    let data_agora = new Date()

    var sql = "INSERT INTO dados(tempatual, datahora, localizacao, fkcaminhao) VALUES(?)";
    values = [temperaturaVar*(Math.random()+0.5), data_agora, local[Math.floor(Math.random() * local.length)], 100];
    console.log();
    db.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });

    
    sql = "INSERT INTO dados(tempatual, datahora, localizacao, fkcaminhao) VALUES(?)";
    values = [temperaturaVar*(Math.random()-0.3), data_agora, local[Math.floor(Math.random() * local.length)], 101];
    console.log();
    db.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });


     sql = "INSERT INTO dados(tempatual, datahora, localizacao, fkcaminhao) VALUES(?)";
     values = [temperaturaVar*(Math.random()), data_agora, local[Math.floor(Math.random() * local.length)], 102];
    console.log();
    db.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });

    
    sql = "INSERT INTO dados(tempatual, datahora, localizacao, fkcaminhao) VALUES(?)";
    values = [temperaturaVar*(Math.random()), data_agora, local[Math.floor(Math.random() * local.length)], 103];
    console.log();
    db.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });
    
    
    response.sendStatus(200);
})

module.exports = router;