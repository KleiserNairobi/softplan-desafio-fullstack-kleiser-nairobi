import React from 'react';
import MaterialTable from 'material-table';
import { useTheme } from '@material-ui/core/styles';
import { useGeral } from '../contexts/GeralCtx';

export default function Tabela(props, event) {

  const theme = useTheme();
  const { setId, setAlterar, setExcluir } = useGeral();

  return (
    <MaterialTable
      isLoading={props.carregando}
      title={props.titulo}
      columns={props.colunas}
      data={props.dados}    

      options={{
        padding: "dense",
        showTitle: false,
        filtering: false,
        grouping: false,
        columnsButton: false,
        pageSize: 10,
        searchFieldAlignment: "left",
        searchFieldVariant: "standard",
        actionsColumnIndex: -1,
        loadingType: "linear",
        showTextRowsSelected: false,
        toolbarButtonAlignment: "left",
        headerStyle: {
          backgroundColor: theme.palette.primary.main,
          color: '#FFF',
        },
      }}

      actions={[
        {
          icon: 'edit',
          tooltip: 'Altera',
          hidden: props.ocultarEditar,
          disabled: props.desabilitarEditar,
          onClick: (event, rowData) => {
            setId(rowData.id);           
            setAlterar(true);
          },
        },
        {
          icon: 'delete',
          tooltip: 'Exclui',
          hidden: props.ocultarExcluir,
          disabled: props.desabilitarExcluir,
          onClick: (event, rowData) => {
            setId(rowData.id);          
            setExcluir(true);
          },
        }
      ]}

      localization={{
        body: {
          emptyDataSourceMessage: 'Nenhum registro para exibir...'
        },
        toolbar: {
          addRemoveColumns: 'Adiciona ou remove colunas',
          searchTooltip: 'Pesquisar',
          searchPlaceholder: 'Pesquisar',
          nRowsSelected: '{0} linha(s) selecionada',
          showColumnsTitle: 'Mostrar colunas',
          showColumnsAriaLabel: 'Mostrar colunas',
          exportTitle: 'Exportar',
          exportAriaLabel: 'Exportar',
          exportName: 'Exportar como CSV'
        },
        header: {
          actions: 'Ações'
        },
        pagination: {
          labelRowsSelect: 'linhas',
          labelDisplayedRows: '{count} de {from}-{to}',
          firstTooltip: 'Primeira página',
          previousTooltip: 'Página anterior',
          nextTooltip: 'Próxima página',
          lastTooltip: 'Última página'
        }
      }}
    />      
  )
}
