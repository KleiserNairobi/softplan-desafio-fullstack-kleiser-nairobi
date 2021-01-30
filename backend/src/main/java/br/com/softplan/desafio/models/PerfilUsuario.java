package br.com.softplan.desafio.models;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity @Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class PerfilUsuario {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "perfil_usuario_seq")
    @SequenceGenerator(name = "perfil_usuario_seq", sequenceName = "perfil_usuario_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Campo tipo de perfil é obrigatório")
    private TipoPerfil tipo;

    @NotNull(message = "Campo descrição é obrigatório")
    @Size(max = 50, message = "Campo descrição deve ter no máximo {max} caracteres")
    private String descricao;

}
