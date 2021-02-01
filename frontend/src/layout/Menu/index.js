import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Assignment, AssignmentTurnedIn, PermContactCalendar, Person } from '@material-ui/icons';
import { useGeral } from '../../contexts/GeralCtx';
import styles from '../styles';

export default function BarraMenu() {
  const estilo = styles();
  const { setCarregar } = useGeral();
  
  function ListItemLink(props) {
    const { icon, primary, to } = props;
    const renderLink = React.useMemo(() =>
      React.forwardRef((itemProps, ref) =>
        <RouterLink to={to} ref={ref} {...itemProps} />
      ), [to],
    );
    return (
      <li >
        <ListItem button component={renderLink} onClick={() => setCarregar(true)} >
          {icon ? <ListItemIcon className={estilo.ml1}>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  return (
    <Drawer
      anchor="left"  
      variant="permanent"
      className={estilo.drawer}
      classes={{paper: estilo.drawerPaper}} 
    >
      <div className={estilo.toolbar}>
        <Typography variant="h5">Desafio SoftPlan</Typography>
      </div>      
      <Divider />
      <List component="div" disablePadding dense={true}>
        <ListItemLink to="/perfis" primary="Perfis" icon={<PermContactCalendar/>}/>      
        <ListItemLink to="/usuarios" primary="Usuários" icon={<Person/>}/>
        <Divider/>        
        <ListItemLink to="/processos" primary="Processos" icon={<Assignment/>}/>
        <ListItemLink to="/pareceres" primary="Pareceres" icon={<AssignmentTurnedIn/>}/>
      </List>      
    </Drawer>
  );
}
