import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TableComponent.css";

 
 

export default function ({
    rows,
    headCells,
    rowFieldDataName,
  }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              headCells.map( (item,idx)=>{
              return( <TableCell   key={item.id || idx}> <div className="tb-comp-hd-tl"> {item.label} </div></TableCell>) ; 
            })
          }
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => {

              // created each element of  row of  table 
               let eachRowElemList =    rowFieldDataName.map( (item,idx)=>{
                  return(  <TableCell  align={headCells[idx].align|| "right"}   key={idx}  >{row[item ]} </TableCell>) ; 
                })
      //
                //return each row 
           return (
             <TableRow
               key={row._id || row.id || index}
               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
             >
               {eachRowElemList}
             </TableRow>
           );
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
          
       })}
        </TableBody>

        
      </Table>
    </TableContainer>
  );
}
 