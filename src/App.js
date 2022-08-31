import React from 'react';
import { Route, Switch, Redirect  , BrowserRouter } from "react-router-dom"; 
import PageNotFound from "./component/PageNotFound";
import MainRoute from "./routes/MainRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';


function App() {
  return (
    <div  > 
      <BrowserRouter>
      <Switch> 
          <Route exact path="/company/*" component={MainRoute}  />

          <Redirect exact path="/" to="/company/add"  /> 
          <Route exact path="/*" component={PageNotFound}  />
         
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;


