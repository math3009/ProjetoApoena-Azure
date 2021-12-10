-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


/* para workbench - local - desenvolvimento */
create database sprint2;
use sprint2;

create user 'apoena'@'localhost' identified by 'Senha@123';
grant insert, create, drop, select on adsc.* to 'apoena'@'localhost';
flush privileges;

create table empresa(
 idempresa int primary key auto_increment,
 nome varchar(120),
 email varchar(45),
 cnpj char(14),
 responsavel varchar(120)
 ) auto_increment = 1;
 
 create table usuario(
 idusuario int primary key auto_increment,
 nome varchar(120),
 cpf char(11),
 setor varchar(120),
 cargo varchar(120),
 email varchar(120),
 senha varchar(120),
 fkempresa int
 ) auto_increment = 10;
 alter table usuario add foreign key (fkempresa) references empresa(idempresa);
 
 create table caminhao(
 idcaminhao int primary key auto_increment,
 placa char(8),
 fkempresa int
 ) auto_increment = 100;
  alter table caminhao add foreign key (fkempresa) references empresa(idempresa);
  
  create table dados(
  iddados int primary key auto_increment,
  tempatual decimal(4,2),
  localizao varchar(120),
  datahora datetime,
  fkcaminhao int) auto_increment = 200;
alter table dados add foreign key (fkcaminhao) references caminhao(idcaminhao);
   
   create table produto(
   idproduto int primary key auto_increment,
   nome varchar(45),
   categoria varchar(45),
   tempmax decimal(4,2),
   tempmin decimal(4,2)
   ) auto_increment = 300;
   
   create table viagem (
   idviagem int primary key auto_increment,
   datainicio date,
   datafim date,
   fkproduto int,
   fkcaminhao int
   ) auto_increment = 400;
alter table viagem add foreign key (fkproduto) references produto(idproduto);
alter table viagem add foreign key (fkcaminhao) references caminhao(idcaminhao);

CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);