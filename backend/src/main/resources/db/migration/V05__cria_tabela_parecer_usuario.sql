-- cria_tabela_parecer_usuario
create table public.parecer_usuario (
	parecer_id int4 not null,
	usuario_id int4 not null,
	constraint pk_parecer_usuario primary key (parecer_id, usuario_id),
	constraint fk_parecer foreign key (parecer_id) references parecer(id),
	constraint fk_usuario foreign key (usuario_id) references usuario(id)
);