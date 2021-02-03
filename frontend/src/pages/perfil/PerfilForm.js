import React, {useEffect} from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, MenuItem, TextField } from '@material-ui/core';
import { ArrowBack, PermContactCalendar } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/PerfilService';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import schema from './PerfilSch';
import PageCss from '../pagesCss';


export default function PerfilForm() {

  const css = PageCss();
  const history = useHistory();
  const { id, alterar, setAlterar, setCarregar } = useGeral();
  const valoresIniciais = { tipo: '', descricao: '' };
  const { register, control, handleSubmit, errors, reset, setValue } = useForm({
    mode: 'all',
    defaultValues: valoresIniciais,
    resolver: yupResolver(schema)
  });

  // Effect para buscar os dados a serem alterados
  useEffect(() => {
    if (alterar) {
      async function buscaDado() {
        try {
          const resposta = await service.obtem(`/perfis/${id}`);
          if (resposta.data) {
            setValue('tipo', resposta.data.tipo);
            setValue('descricao', resposta.data.descricao);
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
          const resposta = await service.altera(`/perfis/${id}`, data);
          if (resposta) {
            alert("Registro alterado com sucesso!");
            setAlterar(false);
            setCarregar(true);
            history.push('/perfis');
            }
        } catch (error) {
          alert(error);
        }
      }
      alteraDado();
    } else {
      async function insereDado() {
        try {
          const resposta = await service.insere('/perfis', data);
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
        titulo="Perfil"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/perfis"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <form onSubmit={handleSubmit(submitForm)}>
        <Card variant="outlined">
          <CardContent>
            <Card>
              <CardHeader
                avatar={<Avatar className={css.avatar}><PermContactCalendar /></Avatar>}
                title="Perfil"
                subheader="Informe os dados do perfil"
                className={css.cartaoTitulo}
              />
              <CardContent>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Controller
                      name="tipo"
                      control={control}
                      as={
                        <TextField
                          select
                          fullWidth
                          label="Tipo de Perfil"
                          variant="filled"
                          InputLabelProps={{ shrink: true }}
                          error={!!errors.tipo}
                          helperText={errors.tipo ? errors.tipo.message : ''}
                        >
                          <MenuItem  key="ADM" value="ADM">ADMINISTRATIVO</MenuItem>
                          <MenuItem  key="TRI" value="TRI">TRIADOR</MenuItem>
                          <MenuItem  key="FIN" value="FIN">FINALIZADOR</MenuItem>
                        </TextField>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      fullWidth
                      type="text"
                      name="descricao"
                      label="Descrição"
                      variant="filled"
                      inputRef={register}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.descricao}
                      helperText={errors.descricao ? errors.descricao.message : ''}
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