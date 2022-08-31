import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
import TableComponent from "../component/TableComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Input, Button, Checkbox } from "antd";
import sendRequest from '../js/sendRequest';
import CircularLoader from '../component/CircularLoader';
import { toast } from 'react-toastify';
import "./ListCompany.css";

import { Avatar, Card } from "antd";
const { Meta } = Card;
const headCells = [
  {
    id: "sno",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", minWidth: "16px", margin: "0" }}> S.No.</p>
    ),
    align: "left",
  },
  {
    id: "com_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", minWidth: "200px", margin: "0" }}>
        Company Name
      </p>
    ),
    align: "left",
  },
  {
    id: "cin",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", minWidth: "20px", maxWidth: "50px", margin: "0" }}>
        CIN
      </p>
    ),
    align: "left",
  },
  {
    id: "emp_ass_crs",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", minWidth: "20px", margin: "0" }}>
        Created At
      </p>
    ),
    align: "left",
  },

  {
    id: "emp_action",
    align: "left",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", minWidth: "20px", margin: "0" }}>
        Actions
      </p>
    ),
    align: "left",
  },
];

let rowFieldDataName = [
  "sno",
  "title",
  "cId",
  "createdAt",
  "action",
];




export default function ({ }) {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {

    loadPageData();
  }, []);


  // load  data from api 
  async function loadPageData() {

    try {
      // set loader 
      setPageData(<CircularLoader />);

      // fetch data 
      let url = process.env.REACT_APP_API_URL + "/company";
      let responseData = await sendRequest.get(url)
      responseData = JSON.parse(responseData);
      console.log(responseData.data);

      diplayPage(responseData.data)
    }
    catch (error) {
      console.error(error);
    };
  }


  // create table  from data  and display
  function diplayPage(data) {
    // neccessary fields
    let companyList = data.map((item, idx) => {
      item.action = <div key={idx} className="tb-action-ic-bx"> <span id={"comp_row-" + item.id} onClick={handleDelete}><DeleteIcon /></span>  </div>
      item.sno = idx + 1;
      item.createdAt = new Date(item.createdAt).toLocaleDateString();
      return item
    })

    // display table 
    setPageData(<TableComponent
      key='company_table'
      rows={companyList}
      headCells={headCells}
      rowFieldDataName={rowFieldDataName}
    />);

  }


  // delete row 
  async function handleDelete(e) {

    try {

      let id = e.currentTarget.id.split("-").pop();
      let url = process.env.REACT_APP_API_URL + "/company";
      let param = JSON.stringify({
        id: id,
        companyList: "yes" // add this field to get updated list in response 
      });

      // set loader 
      setPageData(<CircularLoader />);
      let responseData = await sendRequest.delete(param, url, "application/json");
      responseData = JSON.parse(responseData);
      toast.success(responseData.message)
      diplayPage(responseData.data)

    }
    catch (error) {
      console.error(error);
      if (typeof error == 'string') {
        toast.error(JSON.parse(error).message)
      } else {
        toast.error("Something Went Wrong")
      }

    };
  }

  return (
    <div style={{ padding: "20px" }}>

      <div className="ad-dsbd-st-mn-bx  comp-list-mn-bx">
        <div className="comp-hd-bx" >
          <p className="ad-dsbd-st-tl"> Company List </p>
          <span >
            <NavLink className="ad-nvlk" exact to={"/company/add"}>
              <Button type="primary" icon={<AddIcon size="10px" />}    >    Add Company </Button>
            </NavLink>
          </span>
        </div>
        <div className="ad-dsbd-st-item-par-bx ad-dsbd-prod-item-par-bx">
          {pageData}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
} 