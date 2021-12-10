const sensors = require('./sensors')
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const db = require('./connection');

class ArduinoRead {

    constructor() {
        this.dadosTemperatura = [];
    }

    get List() {
        return this.dadosTemperatura;
    }


    geradorDados() {
        setInterval(() => {
            let dadosGerados = sensors.lm35();

            console.log('Temperatura gerada: ', parseFloat(dadosGerados.toFixed(2)));
            this.dadosTemperatura.push(dadosGerados); 

            inserirBanco(dadosGerados,this.dadosTemperatura);

        }, 2000);
    }

    SetConnection() {

        SerialPort.list().then(listSerialDevices => {

            let listArduinoSerial = listSerialDevices.filter(serialDevice => {
                return serialDevice.vendorId == 2341 && serialDevice.productId == 43;
            });

            if (listArduinoSerial.length != 1) {
                this.geradorDados();
                throw new Error("Arduino não encontrado - Gerando dados");
            } else {
                console.log("Arduino encontrado na porta COM %s", listArduinoSerial[0].comName);
                return listArduinoSerial[0].comName;
            }
        }).then(comName => {
                let arduino = new SerialPort(comName, { baudRate: 9600 });

                const parser = new Readline();
                arduino.pipe(parser);

                parser.on('data', (data) => {
                    console.log('Temperatura capturada: ', data);
                    this.dadosTemperatura.push(parseFloat(data));
                    
                    inserirBanco(data, this.dadosTemperatura);
                });
        }).catch(error => console.log(error));
    }
}

const serial = new ArduinoRead();
serial.SetConnection();


function inserirBanco(data,lista){
    lista.push(parseFloat(data));

    let valor = lista[lista.length - 1];

    let local = ['Sorocaba', 'São Paulo', 'Poá', 'Ribeirão Pires', 'Campos do Jordão', 'Vista Alegre', 'Avenida Paulista', 'Jardins', 'Oscar Freire', 'Faria Lima']
    temperatura = lista[lista.length - 1];
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
};