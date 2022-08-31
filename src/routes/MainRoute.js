import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch,  NavLink, useLocation   } from "react-router-dom";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "../component/PageNotFound";
import PageLoader from "../component/PageLoader";
 

import 'react-toastify/dist/ReactToastify.css';
 
// const Company = React.lazy(() => import('../company'));
 

 


function MainRoute() {
 
  return (
    <div className="app-page">
      <ToastContainer />
      <div    >

      </div>

      <Suspense fallback={<PageLoader/>}>
      <Switch> 
        <Route exact path="/search-company" component={PageNotFound} />
        <Route exact path="/list-company" component={PageNotFound} />
        
        
        <Route exact path="/*" component={PageNotFound} />

      </Switch>
      </Suspense>


    </div>
  );
}
export default MainRoute;