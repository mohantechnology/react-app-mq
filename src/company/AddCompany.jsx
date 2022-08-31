import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useHistory, useLocation } from "react-router-dom";


// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import sendRequest from '../js/sendRequest';
import { toast } from 'react-toastify';


import "./AddCompany.css";




export default function () {
  const history = useHistory();
  const [value, setValue] = React.useState(null);
  const [buttonStatus, setButtonStatus] = React.useState(false);
  const [autoCompleteData, setAutoComplete] = useState();




  useEffect(() => {

    diplayAutocomplete([])
  }, []);


 

  // load  data from api 
  async function searchMatchingCompany(e) {

    try {
      // set loader 
      // setPageData(<CircularLoader />);

      // fetch data 
      let query = e.target.value ?  e.target.value.trim()  : undefined  ;  
 
        if(  query ) { 
          let url = process.env.REACT_APP_API_URL + "/search_company?query="+ query ;
          let responseData = await sendRequest.get(url)
          responseData = JSON.parse(responseData);
          diplayAutocomplete(responseData.data)

        } 
 
    }
    catch (error) {
      console.error(error);
    };
  }

  //   display automcomplete list 
  function diplayAutocomplete(data) {
    // add neccessary fields
    let nameTable = {}
    // make unique title for each name  
    let companyList = data.map((item, idx) => {
       if( nameTable[item.title] !== undefined){
       // add space at end if duplicate to make it unique
        nameTable[item.title ] += " " ; 
        item.title = item.title +  nameTable[item.title ]  ; 
       }else{
        nameTable[item.title ] = ""; 
       }
      
      return item
    })
 
    const defaultProps = {
      options: companyList,
      getOptionLabel: (option) => option.title,
    }

    setAutoComplete(<Autocomplete
      {...defaultProps}
      id="Search-Company" 
      value={value}
      onChange={handleChange}
      onKeyUp={searchMatchingCompany}
      renderInput={(params) => { 
        return (
        <TextField {...params} label="Search Company" variant="standard"    />
      )}}
    />)
  }

 
 

    // Add company 
    async function handleSubmit(e) {
 
      console.log(value );
 
  
      if ( !value ){ 
        toast.error("Please Select a Company to Add") ; 
        return ; 
      }

      try {
  
        setButtonStatus(true)
        let url = process.env.REACT_APP_API_URL + "/company"; 
        let param = JSON.stringify( value); 
        let responseData = await sendRequest.post(param, url, "application/json");
        responseData = JSON.parse(responseData); 
        toast.success(responseData.message)
        
        history.push("/company/list");

      }
      catch (error) {
        console.error(error);
        if (typeof error == 'string') {
          toast.error(JSON.parse(error).message)
        } else {
          toast.error("Something Went Wrong")
        }
  
      };
      setButtonStatus(false); 
    }
  
// store data on select 
  function handleChange(event, newValue) {
    setValue(newValue);  
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
            {autoCompleteData} 
          </div>

          <br />

          <br />
          <br />
          <Button type="primary" block onClick={handleSubmit} disabled={buttonStatus}>   Submit   </Button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}


 