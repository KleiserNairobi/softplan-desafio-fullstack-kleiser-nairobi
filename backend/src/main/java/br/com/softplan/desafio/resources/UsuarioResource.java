package br.com.softplan.desafio.resources;

import br.com.softplan.desafio.models.Usuario;
import br.com.softplan.desafio.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {

    @Autowired
    private UsuarioService service;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> find(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.find(id));
    }

    @GetMapping("/login")
    public ResponseEntity<Optional<Usuario>> login(
            @RequestParam(name = "email", required = true) String email,
            @RequestParam(name = "senha", required = true) String senha
    ) {
        return ResponseEntity.ok().body(service.findByEmailAndSenha(email, senha));
    }

    @PostMapping
    public ResponseEntity<Usuario> insert(@Valid @RequestBody Usuario entity) {
        Usuario savedEntity = service.insert(entity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(savedEntity.getId()).toUri();
        return ResponseEntity.status(HttpStatus.CREATED).location(uri).body(savedEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> update(@Valid @RequestBody Usuario entity, @PathVariable Long id) {
        service.update(entity, id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
