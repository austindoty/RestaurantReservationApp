import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import useQuery from "../utils/useQuery";
import Reservations from "../reservations/NewReservations";
import Tables from "../tables/tables";
import Seat from "../seat/seat";
import Search from "../search/search";
import Edit from "../reservations/editReservation";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  const query = useQuery();
  const date = query.get("date");
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact path="/reservations/:reservation_id/seat">
        <Seat />
      </Route>
      <Route exact path="/reservations/:reservation_id/edit">
        <Edit />
      </Route>
      <Route exact path="/reservations/new">
        <Reservations />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={date || today()} />
      </Route>
      <Route path="/tables/new">
        <Tables />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;