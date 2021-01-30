-- cria_tabela_usuario
create sequence if not exists public.usuario_seq start 1;

create table public.usuario (
	id int4 not null default nextval('usuario_seq'),
	perfil_id int4 not null,
	nome varchar(50) not null,
	email varchar(256) not null,
	senha varchar(256) not null,
	constraint pk_usuario primary key (id),
	constraint fk_usuario_perfil foreign key (perfil_id) references perfil_usuario(id)
);