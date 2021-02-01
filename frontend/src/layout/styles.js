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
}));

export default styles;  