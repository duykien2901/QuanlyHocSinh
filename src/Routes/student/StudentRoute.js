import React, { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Loading from "../../commom/Loading";
import MenuStudent from "../../component/student/layout/MenuStudent";

function StudentRoute() {
  const { path } = useRouteMatch();

  return (
    <MenuStudent>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`${path}`} component={""} />
        </Switch>
      </Suspense>
    </MenuStudent>
  );
}

export default StudentRoute;
