import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch,  NavLink, useLocation   } from "react-router-dom";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "../component/PageNotFound";
import PageLoader from "../component/PageLoader";
 

import 'react-toastify/dist/ReactToastify.css';
 
const AddCompany = React.lazy(() => import('../company/AddCompany'));
 

 


function MainRoute() {
 console.log("inside main route")
  return (
    <div className="app-page">
      <ToastContainer />
      <div    >

      </div>

      <Suspense fallback={<PageLoader/>}>
      <Switch> 
        <Route exact path="/company/add" component={AddCompany} />
        <Route exact path="/company/list" component={PageNotFound} />
        
        
        <Route exact path="/*" component={PageNotFound} />

      </Switch>
      </Suspense>


    </div>
  );
}
export default MainRoute;