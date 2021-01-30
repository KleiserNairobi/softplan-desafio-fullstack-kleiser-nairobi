package br.com.softplan.desafio.services;

import br.com.softplan.desafio.models.PerfilUsuario;
import br.com.softplan.desafio.repositories.PerfilUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PerfilUsuarioService {

    @Autowired
    private PerfilUsuarioRepository repository;

    public List<PerfilUsuario> findAll() {
        return repository.findAll();
    }

    public PerfilUsuario find(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new RuntimeException(
                        "Não existe um cadastro de perfil de usuário com o id " + id
                )
        );
    }

    @Transactional
    public PerfilUsuario insert(PerfilUsuario entity) {
        return repository.save(entity);
    }

    @Transactional
    public PerfilUsuario update(PerfilUsuario entity, Long id) {
        PerfilUsuario perfilUsuario = find(id);
        return repository.save(perfilUsuario);
    }

    @Transactional
    public void delete(Long id) {
        find(id);
        repository.deleteById(id);
    }

}
