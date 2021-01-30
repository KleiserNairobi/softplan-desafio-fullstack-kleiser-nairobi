package br.com.softplan.desafio.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity @Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Usuario {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_seq")
    @SequenceGenerator(name = "usuario_seq", sequenceName = "usuario_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "perfil_id")
    @NotNull(message = "Campo perfil é obrigatório")
    private PerfilUsuario perfil;

    @NotNull(message = "Campo nome é obrigatório")
    @Size(max = 50, message = "Campo nome deve ter no máximo {max} caracteres")
    private String nome;

    @NotNull(message = "Campo email é obrigatório")
    @Size(max = 256, message = "Campo email deve ter no máximo {max} caracteres")
    private String email;

    private String senha;

}
