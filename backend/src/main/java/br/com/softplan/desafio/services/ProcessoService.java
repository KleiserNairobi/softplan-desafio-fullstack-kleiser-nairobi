package br.com.softplan.desafio.services;

import br.com.softplan.desafio.models.Processo;
import br.com.softplan.desafio.repositories.ProcessoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ProcessoService {

    @Autowired
    private ProcessoRepository repository;

    public List<Processo> findAll() {
        return repository.findAll();
    }

    public Processo find(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new RuntimeException(
                        "Não existe um cadastro de processo com o id " + id
                )
        );
    }

    @Transactional
    public Processo insert(Processo entity) {
        return repository.save(entity);
    }

    @Transactional
    public Processo update(Processo entity, Long id) {
        Processo processo = find(id);
        BeanUtils.copyProperties(entity, processo, "id");
        return repository.save(processo);
    }

    @Transactional
    public void delete(Long id) {
        find(id);
        repository.deleteById(id);
    }

}
