import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

//match is a route property passed from the app.js route when we linked to this page. route includes match, history by default
//match is equal to the route you are currently at
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default ShopPage;
