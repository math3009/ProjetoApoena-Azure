var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_empresa(nome, email, cnpj, responsavel) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, cnpj, responsavel);
    var instrucao = `
        INSERT INTO empresa (nome, email, cnpj, responsavel) VALUES ('${nome}', '${email}', '${cnpj}', '${responsavel}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function cadastrar_usuario(responsavel, cpf, setor, cargo,  email, senha, nome) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",responsavel, cpf, setor, cargo, email, senha, nome);
//     var instrucao = `
//         INSERT INTO usuario (nome, cpf, setor, cargo,  email, senha, fkempresa) (select '${responsavel}', '${cpf}', '${setor}', '${cargo}', '${email}', '${senha}', idempresa
//         from empresa where nome =  '${nome}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
function cadastrar_usuario(responsavel, cpf, setor, cargo,  email, senha, nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",responsavel, cpf, setor, cargo, email, senha, nome);
    var instrucao = `
        INSERT INTO usuario (nome, cpf, setor, cargo,  email, senha, fkempresa) values ('${responsavel}', '${cpf}', '${setor}', '${cargo}', '${email}', '${senha}', (select max(idempresa)
        from empresa));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar_caminhao(placa, fkempresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_caminhao():",placa, fkempresa);
    var instrucao = `
        INSERT INTO caminhao (placa, fkempresa)  VALUES 
        ('${placa}', '${fkempresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar_viagem(inicioviagem, nomeproduto, placaviagem) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_viagem():",inicioviagem,nomeproduto, placaviagem);
    var instrucao = `
    insert into  viagem (datainicio, fkproduto, fkcaminhao) values (
        '${inicioviagem}', (select idproduto from produto where nome= '${nomeproduto}'), (select idcaminhao from caminhao where placa= '${placaviagem}'));
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);


}

function fim_da_viagem(idviagem,fim_viagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function fim_da_viagem():",idviagem,fim_viagem);
    var instrucao = `
    update viagem set datafim = '${fim_viagem}' where idviagem= '${idviagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function exibir_idviagem_usuario() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n exibir_idviagem_usuario(): ")
    var instrucao = `
    select max(idviagem) FROM viagem ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibir_placa(fkempresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n exibir_placa(): ", fkempresa)
    var instrucao = `
    select placa FROM caminhao where fkempresa= ${fkempresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastrar_empresa,
    cadastrar_usuario,
    listar,
    cadastrar_caminhao,
    cadastrar_viagem,
    fim_da_viagem,
    exibir_idviagem_usuario,
    exibir_placa

};