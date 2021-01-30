-- cria_tabela_parecer
create sequence if not exists public.parecer_seq start 1;

create table public.parecer (
	id int4 not null default nextval('parecer_seq'),
	processo_id int4 not null,
	parecer varchar(256) not null,
	data date not null default current_date,
	hora time not null default current_time,
	constraint pk_parecer primary key (id),
	constraint fk_parecer_processo foreign key (processo_id) references processo(id)
);