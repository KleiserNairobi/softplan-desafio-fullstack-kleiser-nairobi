package br.com.softplan.desafio.resources;

import br.com.softplan.desafio.models.PerfilUsuario;
import br.com.softplan.desafio.services.PerfilUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/perfis")
public class PerfilUsuarioResource {

    @Autowired
    private PerfilUsuarioService service;

    @GetMapping
    public ResponseEntity<List<PerfilUsuario>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerfilUsuario> find(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.find(id));
    }

    @PostMapping
    public ResponseEntity<PerfilUsuario> insert(@Valid @RequestBody PerfilUsuario entity) {
        PerfilUsuario savedEntity = service.insert(entity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(savedEntity.getId()).toUri();
        return ResponseEntity.status(HttpStatus.CREATED).location(uri).body(savedEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PerfilUsuario> update(@Valid @RequestBody PerfilUsuario entity, @PathVariable Long id) {
        service.update(entity, id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
