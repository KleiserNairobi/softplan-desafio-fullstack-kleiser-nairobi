package br.com.softplan.desafio.repositories;

import br.com.softplan.desafio.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
