import React, { Suspense } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";

import Loading from "./commom/Loading";
import PageNotFound from "./commom/PageNotFound";
import PrivateRouter from "./commom/PrivateRouter";
import LoginPage from "./component/login/LoginPage";
import AdminRoute from "./Routes/admin/AdminRoute";
import StudentRoute from "./Routes/student/StudentRoute";
import TeacherRoute from "./Routes/teacher/TeacherRoute";

function Routes() {
  const history = useHistory();
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route component={LoginPage} exact path="/login" />

        <PrivateRouter component={AdminRoute} path="/admin" />
        <PrivateRouter component={StudentRoute} path="/student" />
        <PrivateRouter component={TeacherRoute} path="/teacher" />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
