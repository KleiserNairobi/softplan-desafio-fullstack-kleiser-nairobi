-- adiciona campos na tabela parecer
alter table public.parecer
add usuario_id int4 null;

alter table public.parecer
add constraint fk_parecer_usuario foreign key (usuario_id) references public.usuario(id);

alter table public.parecer
alter column usuario_id set not null;
