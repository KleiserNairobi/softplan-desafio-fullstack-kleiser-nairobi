import { makeStyles } from '@material-ui/core/styles';

const PagesCss = makeStyles((theme) => ({
  cartaoTitulo: {
    backgroundColor: theme.palette.primary.main,
    '& .MuiCardHeader-title': {
      color: theme.palette.primary.contrastText,
      fontSize: '15px',
    },
    '& .MuiCardHeader-subheader': {
      color: theme.palette.primary.contrastText,
      opacity: '0.8',
      fontSize: '12px',
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText
    }
  },
  avatar: {
    backgroundColor: theme.palette.primary.dark,
  },


}));

export default PagesCss;