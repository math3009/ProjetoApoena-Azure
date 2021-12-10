var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar_empresa(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var cnpj = req.body.cnpj;
    var responsavel = req.body.responsavel;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        usuarioModel.cadastrar_empresa(nome, email, cnpj, responsavel)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar_usuario(req, res) {
    var responsavel = req.body.responsavel;
    var cpf = req.body.cpf;
    var setor = req.body.setor;
    var cargo = req.body.cargo;
    var email = req.body.email;
    var senha = req.body.senha;
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar_usuario(responsavel, cpf, setor, cargo, email, senha, nome)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar_caminhao(req, res) {
    var placa = req.body.placa;
    var fkempresa = req.body.fkempresa;
   

    if (fkempresa == undefined) {
        res.status(400).send("fk empresa undefined!");
    } else if (placa == undefined) {
        res.status(400).send("sua placa está undefined!");
    } else {
        usuarioModel.cadastrar_caminhao(placa, fkempresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar_viagem(req, res) {
    var inicioviagem = req.body.inicioviagem;
    var nomeproduto = req.body.nomeproduto;
    var placaviagem = req.body.placaviagem;
    

    if (inicioviagem == undefined) {
        res.status(400).send("inicio da viagem estpa indefinido");
    } else if (nomeproduto == undefined) {
        res.status(400).send("nome do produto está indefinido");
    }else if (placaviagem == undefined) {
            res.status(400).send("placa do caminhao da viagem está indefinido");
        }
     else {
        usuarioModel.cadastrar_viagem(inicioviagem, nomeproduto, placaviagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da sua nova viagem! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function fim_da_viagem(req, res) {
    var idviagem = req.body.idviagem;
    var fim_viagem = req.body.fim_viagem;
   

    if (idviagem == undefined) {
        res.status(400).send("id da viagem está indefinido");
    } else if (fim_viagem == undefined) {
        res.status(400).send("sua placa está undefined!");
    } else {
        usuarioModel.fim_da_viagem(idviagem, fim_viagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    alert("Dados inválidos!")
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function  exibir_idviagem_usuario(req, res) {
    
   

  
    
  
        usuarioModel.exibir_idviagem_usuario()
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    res.json(resultado)
                   
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao iniciar a viagem ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    

}
function exibir_placa(req, res) {
    
    var fkempresa = req.body.fkempresa;

    if (fkempresa == undefined) {
        res.status(400).send("fkempresa está indefinido!");
    }else {
        usuarioModel.exibir_placa(fkempresa)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    res.json(resultado)
                   
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao iniciar a viagem ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    entrar,
    cadastrar_empresa,
    cadastrar_usuario,
    listar,
    cadastrar_caminhao,
    cadastrar_viagem,
    testar,
    fim_da_viagem,
    exibir_idviagem_usuario,
    exibir_placa,
   
}
