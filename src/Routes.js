import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import Loading from "./commom/Loading";
import PrivateAdminRouter from './commom/PrivateAdminRouter';
import LoginPage from './component/login/LoginPage';
import AdminRoute from './Routes/admin/AdminRoute';

function Routes() {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route component={LoginPage} exact path="/login"/>

                <PrivateAdminRouter component={AdminRoute} path="/admin"/>
            </Switch>
        </Suspense>
    )
}

export default Routes;