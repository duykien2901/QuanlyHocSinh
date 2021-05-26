import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Loading from "../../commom/Loading";
import MenuAdmin from "../../component/admin/layout/MenuAdmin";

const Home = lazy(() => import("../../component/admin/home/Home"));
const Timetable = lazy(() =>
  import("../../component/admin/timetable/Timetable")
);
const TimetableChange = lazy(() =>
  import("../../component/admin/timetable/TimetableChange")
);
const Device = lazy(() => import("../../component/admin/devices/Device"));
const Account = lazy(() => import("../../component/admin/accounts/Account"));

function AdminRoute() {
  const { path } = useRouteMatch();

  return (
    <MenuAdmin>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route component={Home} exact path={`${path}`} />
          <Route component={Timetable} exact path={`${path}/timetable`} />
          <Route
            component={TimetableChange}
            exact
            path={`${path}/timetable/:change/:id`}
          />
          <Route
            component={TimetableChange}
            exact
            path={`${path}/timetable/:change`}
          />
          <Route component={Device} exact path={`${path}/device`} />
          <Route component={Account} exact path={`${path}/account-people`} />
        </Switch>
      </Suspense>
    </MenuAdmin>
  );
}

export default AdminRoute;
