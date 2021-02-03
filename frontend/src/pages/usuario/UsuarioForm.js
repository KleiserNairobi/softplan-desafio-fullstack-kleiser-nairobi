import React, {useEffect} from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton, MenuItem, TextField } from '@material-ui/core';
import { ArrowBack, PermContactCalendar, YoutubeSearchedFor } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/UsuarioService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import schema from './UsuarioSch';
import PageCss from '../pagesCss';


export default function UsuariioForm() {

  const css = PageCss();
  const history = useHistory();
  const { id, alterar, setAlterar, setCarregar } = useGeral();
  const valoresIniciais = {
    pessoa: { id: ''},
    nome: '',
    email: '',
    senha: ''
  };

  const { register, handleSubmit, errors, reset, setValue } = useForm({
    mode: 'all',
    defaultValues: valoresIniciais,
    resolver: yupResolver(schema)
  });

  // Effect para buscar os dados a serem alterados
  useEffect(() => {
    if (alterar) {
      async function buscaDado() {
        try {
          const resposta = await service.obtem(`/usuarios/${id}`);
          if (resposta.data) {
            setValue('perfil.id', resposta.data.perfil.id);
            setValue('nome', resposta.data.nome);
            setValue('email', resposta.data.email);
            setValue('senha', resposta.data.senha);
          }
        } catch (error) {
          alert(error);
        }
      }
      buscaDado();
    }
  }, [id, alterar, setValue]);

  function submitForm(data) {
    if (alterar & id > 0) {
      async function alteraDado() {
        try {
          const resposta = await service.altera(`/usuarios/${id}`, data);
          if (resposta) {
            alert("Registro alterado com sucesso!");
            setAlterar(false);
            setCarregar(true);
            history.push('/usuarios');
            }
        } catch (error) {
          alert(error);
        }
      }
      alteraDado();
    } else {
      async function insereDado() {
        try {
          const resposta = await service.insere('/usuarios', data);
          if (resposta) {
            alert("Registro inserido com sucesso!");
            reset(valoresIniciais);
          }
        } catch (error) {
          alert(error);
        }
      }
      insereDado();
    }
  }

  return (
    <div>
      <CabecalhoForm
        titulo="Usuario"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/usuarios"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <form onSubmit={handleSubmit(submitForm)}>
        <Card variant="outlined">
          <CardContent>
            <Card>
              <CardHeader
                avatar={<Avatar className={css.avatar}><PermContactCalendar /></Avatar>}
                title="Usuário"
                subheader="Informe os dados do usuário"
                className={css.cartaoTitulo}
              />
              <CardContent>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      type="number"
                      name="perfil.id"
                      label="Perfil"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.perfil}
                      helperText={errors.perfil ? errors.perfil.id.message : ''}
                      InputProps={{
                        onBlur: (ev) => console.log(ev),
                        endAdornment: 
                          <IconButton
                            size="small"
                            onClick={() => console.log('chamou onClick')}
                          >
                            <YoutubeSearchedFor fontSize="small" />
                          </IconButton>
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      fullWidth
                      type="text"
                      name="descricao"
                      label="Descrição Perfil"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="text"
                      name="nome"
                      label="Nome"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.nome}
                      helperText={errors.nome ? errors.nome.message : ''}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="email"
                      name="email"
                      label="Email"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="password"
                      name="senha"
                      label="Senha"
                      variant="filled"
                      inputRef={register}
                      error={!!errors.senha}
                      helperText={errors.senha ? errors.senha.message : ''}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="password"
                      name="confirmeSenha"
                      label="Confirme a Senha"
                      variant="filled"
                      error={!!errors.confirmeSenha}
                      helperText={errors.confirmeSenha ? errors.confirmeSenha.message : ''}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <div className={css.formBarraBotao}>
                  <Divider />
                  <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={css.formBotaoDeAcao}
                    > Salvar
                    </Button>
                    <Button
                      type="reset"
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => reset(valoresIniciais)}
                      className={css.formBotaoDeAcao}
                    > Limpar
                    </Button>
                  </div>
                </div>
              </CardActions>
            </Card>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}