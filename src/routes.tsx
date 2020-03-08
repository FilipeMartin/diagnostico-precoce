import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

const Dashboard = lazy(() => {
    return new Promise<any>(resolver => {
        setTimeout(() => resolver(import('pages/Dashboard')), 3000);
    });
});

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading 1...</div>}>
            <Router>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/login'/>} />
                    <Route path='/login' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </Suspense>
    ); 
}

export default Routes;
