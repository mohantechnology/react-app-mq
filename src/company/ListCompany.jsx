import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TableComponent from "../component/TableComponent";
import DeleteIcon from '@mui/icons-material/Delete';
// import Button as MuiButton from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { Input, Button, Checkbox } from "antd";

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
      <p style={{ textAlign: "left", minWidth: "20px", maxWidth:"50px", margin: "0" }}>
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


function ProductBox(props) {
  console.log(props);
  return (
    <div className="">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <NavLink className="ad-nvlk" exact to={props.link || ""}>
            <img alt="example" src={props.img} />
          </NavLink>
        }
      // actions={[
      //   <AccessAlarmIcon key="setting" />,
      //   <AccessAlarmIcon key="edit" />,
      //   <AccessAlarmIcon key="ellipsis" />,
      // ]}
      >
        <Meta
          // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={props.title}
          description={props.desc}
        />

        <div className="ad-dshbd-prod-item-pr-bx">
          <span className="ad-dshbd-prod-item-dis-pr">
            {" "}
            ${((props.discountPercentage * props.price) / 100).toFixed(2)}
          </span>
          <span className="ad-dshbd-prod-item-pr">
            <span>M.R.P: </span>
            <span> ${Number(props.price).toFixed(2)} </span> (
            {props.discountPercentage}% off )
          </span>
        </div>
      </Card>
    </div>
  );
}

export default function ({ }) {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {

    setPageData(<TableComponent
      key='company_table'
      rows={companyList}
      headCells={headCells}
      rowFieldDataName={rowFieldDataName}
    />);

  }, []);

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
let companyList = [
  {
    "id": 4,
    "title": "AGRAWA",
    "cId": "U01122MP1991PT s",
    "createdAt": "2022-08-31T08:51:15.598Z",
    "updatedAt": "2022-08-31T08:51:15.598Z"
  },
  {
    "id": 8,
    "title": "asdas",
    "cId": "U01122MP1991PTC0a06645U01122 ",
    "createdAt": "2022-08-31T08:51:54.276Z",
    "updatedAt": "2022-08-31T08:51:54.276Z"
  },
  {
    "id": 9,
    "title": "josn compnaay",
    "cId": "12324 json",
    "createdAt": "2022-08-31T08:52:19.184Z",
    "updatedAt": "2022-08-31T08:52:19.184Z"
  },
  {
    "id": 12,
    "title": "asdas",
    "cId": "U01122MP10112",
    "createdAt": "2022-08-31T08:52:46.637Z",
    "updatedAt": "2022-08-31T08:52:46.637Z"
  },
  {
    "id": 14,
    "title": "asdasa",
    "cId": "U01122MP10112a",
    "createdAt": "2022-08-31T08:54:04.548Z",
    "updatedAt": "2022-08-31T08:54:04.548Z"
  },
  {
    "id": 17,
    "title": "asdasa",
    "cId": "U01122MP10112aa",
    "createdAt": "2022-08-31T09:00:32.993Z",
    "updatedAt": "2022-08-31T09:00:32.993Z"
  },
  {
    "id": 19,
    "title": "new company",
    "cId": "U01122MP10112aaa",
    "createdAt": "2022-08-31T09:00:58.632Z",
    "updatedAt": "2022-08-31T09:00:58.632Z"
  },
  {
    "id": 21,
    "title": "new company",
    "cId": "U01122MP10112aaaa",
    "createdAt": "2022-08-31T09:02:04.489Z",
    "updatedAt": "2022-08-31T09:02:04.489Z"
  },
  {
    "id": 23,
    "title": "new company",
    "cId": "U01122MP10112aaaas",
    "createdAt": "2022-02-31T09:16:16.689Z",
    "updatedAt": "2022-08-31T09:16:16.689Z"
  },
  {
    "id": 25,
    "title": "new company",
    "cId": "U01122MP10112aaaasds",
    "createdAt": "2022-08-31T09:16:23.885Z",
    "updatedAt": "2022-08-31T09:16:23.885Z"
  },
  {
    "id": 27,
    "title": "new company",
    "cId": "U01122MP10112aaaasdswa",
    "createdAt": "2022-08-31T09:18:07.921Z",
    "updatedAt": "2022-08-31T09:18:07.921Z"
  },
  {
    "id": 29,
    "title": "new company",
    "cId": "U01122MP10112aaaasdswaa",
    "createdAt": "2022-08-31T09:19:07.886Z",
    "updatedAt": "2022-08-31T09:19:07.886Z"
  },
  {
    "id": 30,
    "title": "new company",
    "cId": "U01122MP10112aaaasdswaas",
    "createdAt": "2022-08-31T09:19:15.243Z",
    "updatedAt": "2022-08-31T09:19:15.243Z"
  },
  {
    "id": 33,
    "title": "new company",
    "cId": "U01122MP10112aaaasdswaasa",
    "createdAt": "2022-08-31T09:19:25.927Z",
    "updatedAt": "2022-08-31T09:19:25.927Z"
  },
  {
    "id": 36,
    "title": "new company",
    "cId": "U01122MP10112aaaasdswaasaa",
    "createdAt": "2022-08-31T09:22:46.352Z",
    "updatedAt": "2022-08-31T09:22:46.352Z"
  },
  {
    "id": 38,
    "title": "josn compnaay",
    "cId": "12324 jsoan",
    "createdAt": "2022-08-31T09:32:27.323Z",
    "updatedAt": "2022-08-31T09:32:27.323Z"
  }
]


companyList.map((item, idx) => {
  item.action = <div key={idx} className="tb-action-ic-bx"> <span id={"ad-cl-id-" + idx}><DeleteIcon /></span>  </div>
  item.sno = idx + 1 ;
  item.createdAt =   new Date( item.createdAt).toLocaleDateString();
})
