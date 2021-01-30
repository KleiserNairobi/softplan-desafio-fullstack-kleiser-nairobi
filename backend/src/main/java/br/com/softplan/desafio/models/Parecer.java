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
public class Parecer {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "parecer_seq")
    @SequenceGenerator(name = "parecer_seq", sequenceName = "parecer_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "processo_id")
    @NotNull(message = "Campo processo é obrigatório")
    private Processo processo;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @NotNull(message = "Campo usuário é obrigatório")
    private Usuario usuario;

    @NotNull(message = "Campo parecer é obrigatório")
    @Size(max = 256, message = "Campo parecer deve ter no máximo {max} caracteres")
    private String parecer;

    private Date data;

    private Time hora;

}
