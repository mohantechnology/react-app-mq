import React from "react";
import { Route, Switch, NavLink, useLocation ,useHistory} from "react-router-dom"; 

// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./AddCompany.css";




export default function () {
  const [value, setValue] = React.useState(null);
 
  const history = useHistory();
  // const location = useLocation();

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title ,
  };

  function handleChange (event, newValue)  {
    setValue(newValue);
    console.log(newValue )
  }

  function handleSubmit (e)  {
    history.push("/company/list"); 
  }
 
 
  return (
    <div>
 

      <div className="ad-lg-mnbx">
 
        <div>
          <div className="ad-lg-tl-bx">
            <div className="ad-lg-tl"> Add Company  </div>
       
          </div>
          <br />

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl">   </div>
            <Autocomplete
        {...defaultProps}
        id="Search-Company"
        // disableCloseOnSelect
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label="Search Company" variant="standard" />
        )}
      />
         
          </div>

         <br/>
      
         <br/>
         <br/>
          <Button type="primary" block onClick={handleSubmit}>   Submit   </Button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
   
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

