package br.com.softplan.desafio.repositories;

import br.com.softplan.desafio.models.Processo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcessoRepository extends JpaRepository<Processo, Long> {
}
