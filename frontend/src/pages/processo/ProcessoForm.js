import React, {useEffect} from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core';
import { ArrowBack, Assignment } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useGeral } from '../../contexts/GeralCtx';
import { useAutenticacao } from '../../contexts/AutenticacaoCtx';
import * as service from '../../services/ProcessoService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import schema from './ProcessoSch';
import PageCss from '../pagesCss';


export default function ProcessoForm() {

  const css = PageCss();
  const history = useHistory();
  const { usuario } = useAutenticacao();
  const { id, alterar, setAlterar, setCarregar } = useGeral();
  const valoresIniciais = { solicitante: '', assunto: '' };
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
          const resposta = await service.obtem(`/processos/${id}`);
          if (resposta.data) {
            setValue('solicitante', resposta.data.solicitante);
            setValue('assunto', resposta.data.assunto);
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
          const resposta = await service.altera(`/processos/${id}`, data, usuario.id);
          if (resposta) {
            alert("Registro alterado com sucesso!");
            setAlterar(false);
            setCarregar(true);
            history.push('/processos');
            }
        } catch (error) {
          alert(error);
        }
      }
      alteraDado();
    } else {
      async function insereDado() {
        try {
          const resposta = await service.insere('/processos', data, usuario.id);
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
        titulo="Processo"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/processos"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <form onSubmit={handleSubmit(submitForm)}>
        <Card variant="outlined">
          <CardContent>
            <Card>
              <CardHeader
                avatar={<Avatar className={css.avatar}><Assignment /></Avatar>}
                title="Processo"
                subheader="Informe os dados do processo"
                className={css.cartaoTitulo}
              />
              <CardContent>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="solicitante"
                      label="Solicitante"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.solicitante}
                      helperText={errors.solicitante ? errors.solicitante.message : ''}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="assunto"
                      label="Assunto"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.assunto}
                      helperText={errors.assunto ? errors.assunto.message : ''}
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