package br.com.softplan.desafio.services;

import br.com.softplan.desafio.models.Parecer;
import br.com.softplan.desafio.repositories.ParecerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ParecerService {

    @Autowired
    private ParecerRepository repository;

    public List<Parecer> findAll() {
        return repository.findAll();
    }

    public Parecer find(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new RuntimeException(
                        "Não existe um cadastro de perfil de usuário com o id " + id
                )
        );
    }

    @Transactional
    public Parecer insert(Parecer entity) {
        return repository.save(entity);
    }

    @Transactional
    public Parecer update(Parecer entity, Long id) {
        Parecer parecer = find(id);
        BeanUtils.copyProperties(entity, parecer, "id");
        return repository.save(parecer);
    }

    @Transactional
    public void delete(Long id) {
        find(id);
        repository.deleteById(id);
    }

}
