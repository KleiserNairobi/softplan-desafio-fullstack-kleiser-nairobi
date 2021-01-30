package br.com.softplan.desafio.services;

import br.com.softplan.desafio.models.Usuario;
import br.com.softplan.desafio.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public List<Usuario> findAll() {
        return repository.findAll();
    }

    public Usuario find(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new RuntimeException(
                        "Não existe um cadastro de usuário com o id " + id
                )
        );
    }

    @Transactional
    public Usuario insert(Usuario entity) {
        return repository.save(entity);
    }

    @Transactional
    public Usuario update(Usuario entity, Long id) {
        Usuario usuario = find(id);
        return repository.save(usuario);
    }

    @Transactional
    public void delete(Long id) {
        find(id);
        repository.deleteById(id);
    }

}
