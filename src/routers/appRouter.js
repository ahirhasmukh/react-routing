import React from  'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import homeComponent from '../components/home-component';
import CreateComponent from '../components/create-component';
import HelpComponent from '../components/help-component';
import EditComponent from '../components/edit-component';
import NotFoundComponent from '../components/not-found';
import Header from '../components/header-component';
import EditItemComponent from '../components/edit-item-component';

// const Header = () => (
//     <header>
//         <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
//         <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
//         <NavLink to="/edit" activeClassName="is-active"> Edit </NavLink>
//         <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
//     </header>
// )

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={homeComponent} exact={true}/>
                <Route path="/create" component={CreateComponent}/>
                <Route path="/edit" component={EditComponent} exact={true}/>
                <Route path="/edit/:id" component={EditItemComponent}/>
                <Route path="/help" component={HelpComponent}/>
                <Route component={NotFoundComponent}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;