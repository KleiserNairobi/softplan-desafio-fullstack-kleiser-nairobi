import React from 'react';
import { Avatar, Button, Container, CssBaseline, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Email, Lock, AccountCircle } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useAutenticacao } from '../../contexts/AutenticacaoCtx';
import schema from './loginSch';
import styles from './styles';

export default function Login() {
  
  const classes = styles();
  const { handleLogin } = useAutenticacao();
  const valoresIniciais = { email: '', senha: '' };
  const { errors, handleSubmit, register } = useForm({
    mode: 'all',
    defaultValues: valoresIniciais,
    resolver: yupResolver(schema)
  });

  function submitForm(data) {
    handleLogin(data.email, data.senha);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>        
        <Avatar className={classes.avatar}>
          <AccountCircle style={{fontSize: 56}} />
        </Avatar>

        <Typography variant="h6">Acesso ao Sistema</Typography>

        <form className={classes.form} onSubmit={handleSubmit(submitForm)} >
          <TextField
            autoFocus
            fullWidth
            type="email"
            variant="filled"
            margin="normal"
            name="email"
            label="E-Mail"
            placeholder="Digite seu e-mail"
            inputRef={register}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            type="password"
            variant="filled"
            margin="normal"
            name="senha"
            label="Senha"
            placeholder="Digite sua senha" 
            inputRef={register}
            error={!!errors.senha}
            helperText={errors.senha ? errors.senha.message : ''}           
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}                
          />
          <Button
            fullWidth
            type="submit"            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>

        <div className={classes.rodape} >
          <Typography variant="caption"><b>Para acesso ao sistema, utilize:</b></Typography>
          <Typography variant="caption">Usuário: admin@admin.com</Typography>
          <Typography variant="caption">Senha: 123456</Typography>
          <Typography variant="caption">elaborado por Kleiser Nairobi de Oliveira</Typography>
        </div>

      </div>
    </Container>

  )
}
