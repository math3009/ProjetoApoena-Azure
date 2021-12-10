create database sprint2;
use sprint2;


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
-- INSERINDO VALORES NA TABELA EMPRESA
insert into empresa values 
	(null, 'Yokono', 'joao.pedro@yokono.com.br', '23960137000193', 'Joao Pedro'),
    (null, 'Coca Cola', 'felipe.marques@cocacola.com.br', '59875557000119', 'Felipe Marques'),
    (null, 'Denov', 'daniel.hugo@denov.com.br', '42464861000170', 'Daniel Hugo'),
    (null, 'Safira', 'ana.alves@safira.com.br', '41279814000194', 'Ana Alves'),
    (null, 'Nestli', 'kennedy.martins@nestli.com.br', '89971607000122', 'Kennedy Martins'),
    (null, 'Salga', 'carlos.alberto@salga.com.br', '40778057000130', 'Carlos Alberto'),
    (null, 'Medda', 'bruna.pizzi@medda.com.br', '60553376000155', 'Bruna Pizzi'),
    (null, 'Galarde', 'luisa.maias@galarde.com.br', '17524562000137', 'Luisa Maias');
    
select * from empresa;
    
    
-- INSERINDO VALORES NA TABELA USUARIO
insert into usuario (idusuario, nome, cpf, setor, cargo, email, senha)  values
	(null, 'Mauro Nikada', '82252894806', 'Administrativo', 'Estagiário', 'mauro.nikada@empresa.com.br', 'nikada123'),
    (null, 'Matheus Mota', '91126846864', 'Financeiro', 'Diretor Financeiro', 'matheus.mota@empresa.com.br', 'mota123'),
    (null, 'Felipe Pereira', '70338409858', 'Executivo', 'Diretor Executivo', 'felipe.pereira@empresa.com.br', 'pereira123'),
    (null, 'Gabriel Alves', '28780428835', 'Tecnologia da Informação', 'Diretor de TI', 'gabriel.alves@empresa.com.br', 'alves123'),
    (null, 'Bruna Seeda', '61805975889', 'Administrativo', 'Diretora Administrativa', 'bruna.seeda@empresa.com.br', 'seeda123'),
    (null, 'Fernando Gois', '52432221869', 'Tecnologia da Informação', 'Diretor-Chefe de Tecnologia', 'fernando.gois@empresa.com.br', 'gois123'),
    (null, 'Miguel Vasquez', '46356690844', 'Vendas', 'Diretor de Receita', 'miguel.vasquez@empresa.com.br', 'vasquez123'),
    (null, 'Larissa Pedri', '61250556805', 'Financeiro', 'Estagiário', 'larissa.pedri@empresa.com.br', 'pedri123');
    
    select * from usuario;
    
    
-- INSERINDO VALORES NA TABELA CAMINHAO
insert into caminhao (idcaminhao, placa) values
	(null, 'IAH-4874'),
    (null, 'FML-7668'),
    (null, 'FUV-6142'),
    (null, 'BTU-0694'),
    (null, 'DIO-6082'),
    (null, 'CYO-3883'),
    (null, 'GAC-9822'),
    (null, 'CHS-8637');
    
select * from caminhao;
    
-- INSERINDO VALORES NA TABELA DADOS
insert into dados (iddados, tempatual, localizao, datahora) values
	(null, 10.93, 'Avenida Idalécio Carone', '2021-10-17 19:30:53'),
    (null, 11.45, 'Rua João Vicente Ferreira', '2021-10-19 14:02:33'),
    (null, 15.06, 'Travessa Francisco Saldanha', '2021-08-25 15:15:15'),
    (null, 17.30, 'Rua Júlio Feijó', '2021-06-30 22:48:10'),
    (null, 20.45, 'Rua Padre Bartolomeu de Gusmão', '2021-10-22 16:15:00'),
    (null, 13.13, 'Rua Eudemo de Rodes', '2021-11-14 18:00:52'),
    (null, 09.07, 'Rua Américo Vasone Júnior', '2021-11-30 13:45:00'),
    (null, 12.54, 'Rua João de Paula Franco', '2021-10-27 16:16:16');
    
select * from dados;
    
-- INSERINDO VALORES NA TABELA PRODUTO
insert into produto values 
	(null, 'Morango', 'Fruta', 26.00, 13.00),
    (null, 'Leite', 'Laticínio', 09.00, 07.00),
    (null, 'Refrigerante', 'Bebida', 15.00, 03.00),
    (null, 'Banana', 'Fruta', 25.00, 15.00),
    (null, 'Vinho', 'Bebida', 19.00, 14.00),
    (null, 'Galinha', 'Animal', 20.00, 15.00),
    (null, 'Carne', 'Carne', 07.00, 00.00),
    (null, 'Uva', 'Fruta', 25.00, 10.00);
    
select * from produto;
    
-- INSERINDO VALORES NA TABELA VIAGEM
insert into viagem (idviagem, datainicio, datafim) values
	(null, '2021-10-17', '2021-10-20'),
    (null, '2021-10-19', '2021-10-26'),
    (null, '2021-08-25', '2021-09-02'),
    (null, '2021-06-30', '2021-07-10'),
    (null, '2021-10-22', '2021-11-07'),
    (null, '2021-11-14', '2021-11-30'),
    (null, '2021-11-30', '2021-12-09'),
    (null, '2021-10-27', '2021-11-19');
    
select * from viagem;

-- atualizando os usuarios e suas respectivas empresas
Update usuario set fkempresa = '1' where idusuario = '10';
Update usuario set fkempresa = '2' where idusuario = '11';
Update usuario set fkempresa = '3' where idusuario = '12';
Update usuario set fkempresa = '4' where idusuario = '13';
Update usuario set fkempresa = '5' where idusuario = '14';
Update usuario set fkempresa = '6' where idusuario = '15';
Update usuario set fkempresa = '7' where idusuario = '16';
Update usuario set fkempresa = '8' where idusuario = '17';

-- exibir os usuarios e suas respectivas empresas
select * from usuario inner join empresa on fkempresa = idempresa;


-- atualizando os caminhões e suas respectivas empresas
Update caminhao set fkempresa = '1' where idcaminhao = '100';
Update caminhao set fkempresa = '2' where idcaminhao = '101';
Update caminhao set fkempresa = '3' where idcaminhao = '102';
Update caminhao set fkempresa = '4' where idcaminhao = '103';
Update caminhao set fkempresa = '5' where idcaminhao = '104';
Update caminhao set fkempresa = '6' where idcaminhao = '105';
Update caminhao set fkempresa = '7' where idcaminhao = '106';
Update caminhao set fkempresa = '8' where idcaminhao = '107';

select * from caminhao;

-- exibir os caminhoes e suas respectivas empresas
select * from caminhao inner join empresa on fkempresa = idempresa;

-- atualizar os dados e seus respectivos caminhoes 
Update dados set fkcaminhao = '100' where iddados = '200';
Update dados set fkcaminhao = '101' where iddados = '201';
Update dados set fkcaminhao = '102' where iddados = '202';
Update dados set fkcaminhao = '103' where iddados = '203';
Update dados set fkcaminhao = '104' where iddados = '204';
Update dados set fkcaminhao = '105' where iddados = '205';
Update dados set fkcaminhao = '106' where iddados = '206';
Update dados set fkcaminhao = '107' where iddados = '207';

select * from dados;

-- exibir os dados e seus respectivos caminhoes
select * from dados inner join caminhao on fkcaminhao = idcaminhao;



    
use sprint2;
select dados.iddados, viagem.idviagem, dados.tempatual as Temperatura, dados.localizacao as GPS, viagem.fkcaminhao as Caminhão, dados.datahora, 
viagem.datainicio, viagem.datafim
from dados
join caminhao on caminhao.idcaminhao = dados.fkcaminhao
join viagem on viagem.fkcaminhao = caminhao.idcaminhao
where datahora >= viagem.datainicio
and datahora <= viagem.datafim
and viagem.idviagem = 400;

select * from produto;
select * from viagem;
update dados set datahora = 20210102113000 where iddados = 211;
select * from empresa;
select * from usuario;

select idempresa from empresa where nome = "Yokono";

create table teste (
idteste int primary key,
nome varchar(45)
);
insert into teste (idteste, nome)
(select
1, nome
 from empresa where idempresa = 1);
 select * from teste;

INSERT INTO usuario (nome, cpf, setor, cargo, email, senha, fkempresa)
 (select
 '${responsavel}', '${cpf}', '${setor}', '${cargo}', '${email}', '${senha}', idempresa
        from empresa where nome = "Yokono");
use sprint2;
select * from dados;
select * from caminhao;