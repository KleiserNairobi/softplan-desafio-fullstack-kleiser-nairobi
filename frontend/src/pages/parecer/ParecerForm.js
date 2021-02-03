import React, {useEffect} from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton, TextField } from '@material-ui/core';
import { ArrowBack, AssignmentTurnedIn, YoutubeSearchedFor } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useGeral } from '../../contexts/GeralCtx';
import { useAutenticacao } from '../../contexts/AutenticacaoCtx';
import * as service from '../../services/ParecerService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import schema from './ParecerSch';
import PageCss from '../pagesCss';


export default function ParecerForm() {

  const css = PageCss();
  const history = useHistory();
  const { usuario } = useAutenticacao();
  const { id, alterar, setAlterar, setCarregar } = useGeral();
  const valoresIniciais = { processo: {id: '', assunto: ''} , parecer: '' };
  const { register, handleSubmit, errors, reset, setValue } = useForm({
    mode: 'all',
    defaultValues: valoresIniciais,
    resolver: yupResolver(schema)
  });

  // Busca dados do processo - quando ocorre onBlur
  async function onBlurProcesso(ev) {
    if (ev.target.value === '') {
      setValue('processo.assunto', '');
    } else {
      const idProcesso = ev.target.value;
      try {
        const { data } = await service.obtem(`/processos/${idProcesso}`);
        if (data) {
          setValue('processo.id', idProcesso);
          setValue('processo.assunto', data.assunto);
        }
      } catch (error) {
        setValue('processo.assunto', '');
        alert(error);
      }
    }
  }

  // Effect para buscar os dados a serem alterados
  useEffect(() => {
    if (alterar) {
      async function buscaDado() {
        try {
          const resposta = await service.obtem(`/pareceres/${id}`);
          if (resposta.data) {
            setValue('processo.id', resposta.data.processo.id);
            setValue('processo.assunto', resposta.data.processo.assunto);
            setValue('parecer', resposta.data.parecer);
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
          const resposta = await service.altera(`/pareceres/${id}`, data, usuario.id);
          if (resposta) {
            alert("Registro alterado com sucesso!");
            setAlterar(false);
            setCarregar(true);
            history.push('/pareceres');
            }
        } catch (error) {
          alert(error);
        }
      }
      alteraDado();
    } else {
      async function insereDado() {
        try {
          const resposta = await service.insere('/pareceres', data, usuario.id);
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
        titulo="Parecer"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/pareceres"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <form onSubmit={handleSubmit(submitForm)}>
        <Card variant="outlined">
          <CardContent>
            <Card>
              <CardHeader
                avatar={<Avatar className={css.avatar}><AssignmentTurnedIn /></Avatar>}
                title="Parecer"
                subheader="Informe os dados do parecer"
                className={css.cartaoTitulo}
              />
              <CardContent>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      type="number"
                      name="processo.id"
                      label="Processo"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.processo}
                      helperText={errors.processo ? errors.processo.id.message : ''}
                      InputProps={{
                        onBlur: (ev) => onBlurProcesso(ev),
                        endAdornment: 
                          <IconButton
                            size="small"
                            onClick={() => alert('Apresentar tela para escolha do processo')}
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
                      name="processo.assunto"
                      label="Assunto Processo"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="parecer"
                      label="Parecer"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.parecer}
                      helperText={errors.parecer ? errors.parecer.message : ''}
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