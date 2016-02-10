import React, { Component } from 'react';
import Router, { DefaultRoute, Link, Route, Navigation } from 'react-router';

import './App.scss';

export class App extends Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
};

export let LoginRedirect = React.createClass({
    mixins: [ Navigation ],
    componentWillMount: function () {
        // Redirect not logged in users
        // this.transitionTo('/login');
    },
    render: function() {
        return <div>Redirecting</div>;
    }
});

export let DashboardRedirect = React.createClass({
    mixins: [ Navigation ],
    componentWillMount: function () {
        // Redirect logged in users
        // this.transitionTo('/');
    },
    render: function() {
        return <div>Redirecting</div>;
    }
});
