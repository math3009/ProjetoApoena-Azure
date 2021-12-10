insert into  viagem (datainicio, fkproduto, fkcaminhao) values (
'2022-12-01', (select idproduto from produto where nome= 'Uva'), (select idcaminhao from caminhao where placa= 'IAH-4874' and fkempresa=2));

select * from produto;
use sprint2;
select * from usuario;
select * from caminhao;
select * from viagem order by idviagem desc;





select '2021-10-17', fkcaminhao, fkproduto from caminhao join viagem on  fkcaminhao= idcaminhao 
join produto on fkproduto= idproduto where placa= 'IAH-4874' and  nome= 'uva';

select * from viagem;
select * from caminhao;
select * from produto;
update viagem set fkcaminhao= 100 where idviagem= 400;

select '2021-12-02', fkcaminhao, fkproduto from caminhao join viagem on  fkcaminhao= idcaminhao 
join produto on fkproduto= idproduto where placa= 'IAH-4874' or nome= 'morango';


select * from viagem;