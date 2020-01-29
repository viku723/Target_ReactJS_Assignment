import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const ManageProducts = lazy(() => import('./components/ManageProducts/ManageProducts'));
const AddProduct = lazy(() => import('./components/AddProduct/AddProduct'));
const EditProduct = lazy(() => import('./components/EditProduct/EditProduct'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={ManageProducts} />
          <Route exact path="/add" component={AddProduct} />
          <Route exact path="/edit" component={EditProduct} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
