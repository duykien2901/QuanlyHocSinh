import React, { lazy, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Loading from '../../commom/Loading';

import MenuAdmin from '../../component/admin/layout/MenuAdmin';


const Home = lazy(() => import("../../component/admin/home/Home"));
// const Timetable = lazy(() => import("../../components/admin/component/timetable/Timetable"));

function AdminRoute() {
    const {path} = useRouteMatch();

    return (
        <MenuAdmin>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route component={Home} exact path={`${path}/`}/>
                </Switch>
            </Suspense>
        </MenuAdmin>
    )
}

export default AdminRoute;
