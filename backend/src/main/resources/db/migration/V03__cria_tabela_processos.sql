-- cria_tabela_processo
create sequence if not exists public.processo_seq start 1;

create table public.processo (
	id int4 not null default nextval('processo_seq'),
	usuario_id int4 not null,
	solicitante varchar(50) not null,
	assunto varchar(50) not null,
	data_abertura date not null default current_date,
	hora_abertura time not null default current_time,
	constraint pk_processo primary key (id),
	constraint fk_processo_usuario foreign key (usuario_id) references usuario(id)
);