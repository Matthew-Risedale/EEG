import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Game from './../Game';

const App = () => (
    <Router>
        <Switch>
            <Route
                path="/login"
                component={() => (
                    <p>
                        here login page
                    </p>
                )}
            />
            <Route
                path='/game'
                component={Game}
            />
            {/*
            Redirect should be in the end!
            */}
            <Route
                path="/"
                component={() => <Redirect to={{
                    pathname: '/game',
                    search: '?person=personNameFromDBAfterLogin',
                    state: {personID: 'personIDFromDBAfterLogin'}
                }}/>}
            />
        </Switch>
    </Router>
);

export default App;
