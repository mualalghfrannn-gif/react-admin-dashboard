import React from 'react';
import Box from '@mui/material/Box';
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';

const visibleFields = [
  'commodity',
  'quantity',
  'filledQuantity',
  'status',
  'isFilled',
  'unitPrice',
  'unitPriceCurrency',
  'subTotal',
  'feeRate',
  'feeAmount',
  'incoTerm',
];
const columns =  [
  { field: 'id', headerName: 'ID' , align: 'center', headerAlign: 'center' , flex: 1},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    flex: 1,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
    flex: 1,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    rowHeader: true,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function B() {
  const { data, loading } = useDemoData({
    dataset: 'Commodity',
    rowLength: 100,
    editable: true,
    visibleFields,
  });

  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ['commodity'],
      },
      aggregation: {
        model: {
          quantity: 'sum',
        },
      },
    },
  });

  return (
    <Box sx={{ height: 500, width: '95% , margin:"auto' }}>
     
      <div style={{marginBottom:"13px"}}>
        <h1 style={{ color: 'blue' }}>CONTACTS</h1>
        <p>List of contact details for future reference</p>
      </div>
      <DataGridPremium
        {...data}
        rows={rows}
              columns={columns}
        apiRef={apiRef}
        loading={loading}
        initialState={initialState}
        showToolbar
      />
     
    </Box>
  );
}