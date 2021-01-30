package br.com.softplan.desafio.repositories;

import br.com.softplan.desafio.models.PerfilUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerfilUsuarioRepository extends JpaRepository<PerfilUsuario, Long> {
}

