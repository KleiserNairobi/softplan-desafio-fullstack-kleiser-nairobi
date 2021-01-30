-- cria tabela processo_usuario
create table public.processo_usuario (
	processo_id int4 not null,
	usuario_id int4 not null,
	constraint pk_processo_usuario primary key (processo_id, usuario_id),
	constraint fk_processo foreign key (processo_id) references processo(id),
	constraint fk_usuario foreign key (usuario_id) references usuario(id)
);