package br.com.softplan.desafio.models;

public enum TipoPerfil {

    ADM("Administrador"),
    TRI("Triador"),
    FIN("Finalizador");

    private String descricao;

    TipoPerfil(String descricao) {
        this.descricao = descricao;
    }

    public String toString() {
        return this.descricao;
    }

}
