var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar_empresa", function (req, res) {
    usuarioController.cadastrar_empresa(req, res);
})

router.post("/cadastrar_usuario", function (req, res) {
    usuarioController.cadastrar_usuario(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrar_caminhao", function (req, res) {
    usuarioController.cadastrar_caminhao(req, res);
})

router.post("/cadastrar_viagem", function (req, res) {
    usuarioController.cadastrar_viagem(req, res);
})

router.post("/fim_da_viagem", function (req, res) {
    usuarioController.fim_da_viagem(req, res);
})

router.get("/exibir_idviagem_usuario", function (req, res) {
    usuarioController.exibir_idviagem_usuario(req, res);
})

router.post("/exibir_placa", function (req, res) {
    usuarioController.exibir_placa(req, res);
})





module.exports = router;