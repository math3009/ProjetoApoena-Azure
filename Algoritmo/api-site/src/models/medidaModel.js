var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {
//     instrucaoSql = `select top 20
//                         tempatual,
//                         DATE_FORMAT(datahora,'%H:%i:%s') as momento_grafico
//                     from dados
//                     where fkcaminhao = ${idAquario}
//                     order by iddados desc `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }
function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = `select
                        tempatual,
                        datahora as momento_grafico
                    from dados
                    where fkcaminhao = ${idAquario}
                    order by iddados desc `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {
//     instrucaoSql = `select top 1
//                         tempatual,
//                         DATE_FORMAT(datahora,'%H:%i:%s') as momento_grafico
//                         from dados
//                         join caminhao on fkcaminhao = idcaminhao 
//                         where fkcaminhao = ${idAquario} 
//                     order by iddados desc;`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }
function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select top 1
                        tempatual,
                        datahora as momento_grafico
                        from dados
                        join caminhao on fkcaminhao = idcaminhao 
                        where fkcaminhao = ${idAquario} 
                    order by iddados desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}