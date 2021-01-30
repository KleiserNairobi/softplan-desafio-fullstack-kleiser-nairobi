package br.com.softplan.desafio.repositories;

import br.com.softplan.desafio.models.Parecer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParecerRepository extends JpaRepository<Parecer, Long> {
}
