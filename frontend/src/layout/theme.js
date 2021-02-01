import { createMuiTheme } from "@material-ui/core";
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
  }
}, ptBR);

export default theme;