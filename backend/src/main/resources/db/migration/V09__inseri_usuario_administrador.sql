-- inseri perfil administrador
INSERT INTO public.perfil_usuario (id,tipo,descricao)
	VALUES (1,'ADM','PERFIL ADMINISTRADOR');


-- inseri usuário administrador
INSERT INTO public.usuario (id,perfil_id,nome,email,senha)
	VALUES (1,1,'ADMINISTRADOR','admin@admin.com','123456');