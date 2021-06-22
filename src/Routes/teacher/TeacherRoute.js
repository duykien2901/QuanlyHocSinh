import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Loading from "../../commom/Loading";
import MenuTeacher from "../../component/teacher/layout/MenuTeacher";

const PointManagement = lazy(() =>
  import("../../component/teacher/point/PointManagement")
);
const Device = lazy(() => import("../../component/teacher/device/Device"));

export default function TeacherRoute() {
  const { path } = useRouteMatch();

  return (
    <MenuTeacher>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`${path}`} component={""} />
          <Route exact path={`${path}/point`} component={PointManagement} />
          <Route exact path={`${path}/device`} component={Device} />
        </Switch>
      </Suspense>
    </MenuTeacher>
  );
}
