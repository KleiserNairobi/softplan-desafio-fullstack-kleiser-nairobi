package br.com.softplan.desafio.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity @Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Processo {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "processo_seq")
    @SequenceGenerator(name = "processo_seq", sequenceName = "processo_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @NotNull(message = "Campo usuário é obrigatório")
    private Usuario usuario;

    @NotNull(message = "Campo solicitante é obrigatório")
    @Size(max = 50, message = "Campo solicitante deve ter no máximo {max} caracteres")
    private String solicitante;

    @NotNull(message = "Campo assunto é obrigatório")
    @Size(max = 50, message = "Campo assunto deve ter no máximo {max} caracteres")
    private String assunto;

    private Date dataAbertura;

    private Time horaAbertura;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "processo_usuario",
            joinColumns = @JoinColumn(name = "processo_id"),
            inverseJoinColumns = @JoinColumn(name = "usuario_id")
    )
    private List<Usuario> usuarios = new ArrayList<>();

}
