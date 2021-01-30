-- cria_tabela_perfil_usuario
create sequence if not exists public.perfil_usuario_seq start 1;

create table public.perfil_usuario (
	id int4 not null default nextval('perfil_usuario_seq'),
	tipo bpchar(3) not null,
	descricao varchar(50) not null,
	constraint pk_perfil_usuario primary key (id)
);