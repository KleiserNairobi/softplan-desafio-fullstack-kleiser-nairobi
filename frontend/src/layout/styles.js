import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  dadosUsuario: {
    marginLeft: '0px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  margemAvatar: {
    '& > *': {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(2),
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    ...theme.mixins.toolbar,
  },  
  ml1: {
    '& > *': {
      marginLeft: theme.spacing(1),
    },
  },
  conteudo: {
    flexGrow: 1,
    minHeight: `calc(100vh - 50px)`,
    height: `calc(100vh - 50px)`,
    marginLeft: drawerWidth,
    marginTop: '50px',
    padding: theme.spacing(3),
    overflowY: 'scroll',
  },
  tituloPagina: {
    marginLeft: 0,
    '& .MuiTypography-h6': {
      color: theme.palette.primary.main,
    },
  },
  subtituloPagina: {
    marginLeft: 0,
    marginBottom: theme.spacing(2),
    '& .MuiTypography-caption': {
      color: theme.palette.text.primary,
      opacity: '0.9',
    },
  },


}));

export default styles;  