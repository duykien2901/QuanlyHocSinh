import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Loading from "../../commom/Loading";
import MenuStudent from "../../component/student/layout/MenuStudent";

const Timetable = lazy(() =>
  import("../../component/student/timetable/Timetable")
);

function StudentRoute() {
  const { path } = useRouteMatch();

  return (
    <MenuStudent>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`${path}`} component={""} />
          <Route exact path={`${path}/timetable/:id`} component={Timetable} />
        </Switch>
      </Suspense>
    </MenuStudent>
  );
}

export default StudentRoute;
