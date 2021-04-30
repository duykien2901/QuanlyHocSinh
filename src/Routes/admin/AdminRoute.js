import React, { lazy, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Loading from '../../commom/Loading';
import Home from '../../components/admin/component/home/Home';
import Timetable from '../../components/admin/component/timetable/Timetable';
import MenuAdmin from '../../components/admin/layout/MenuAdmin';


// const Home = lazy(() => import("../../components/admin/component/home/Home"));
// const Timetable = lazy(() => import("../../components/admin/component/timetable/Timetable"));

function AdminRoute() {
    const path = useRouteMatch();
    return (
        <MenuAdmin>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route component={Home} exact path={`${path}/`}/>

                    <Route component={Timetable} exact path={`${path}/timetable`} />
                </Switch>
            </Suspense>
        </MenuAdmin>
    )
}

export default AdminRoute;
