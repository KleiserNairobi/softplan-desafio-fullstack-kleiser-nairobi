package br.com.softplan.desafio.repositories;

import br.com.softplan.desafio.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query(" from Usuario where email = :email and senha = :senha ")
    Optional<Usuario> findByEmailAndSenha(@Param("email") String email, @Param("senha") String senha);

}
