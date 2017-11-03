import React, { Component } from 'react';
import { NavLink as RawLink, Switch, Route, withRouter } from 'react-router-dom';

import TZ from './util/TZ';
import Dashboard from './Dashboard';
import History from './History';
import './App.css';

const Link = ({children, ...props}) => <RawLink {...props} activeClassName="active">{children}</RawLink>

class App extends Component {
	render() {
		const {history, location} = this.props;
		return (
			<div>
				<header>
					<span id="logo">
						<Link to="/">JobUp</Link>
					</span>
					<nav>
						<ul>
							<li>
								<Link to="/" exact>Dashboard</Link>
							</li>
							<li>
								<Link to="/history">History</Link>
							</li>
							<li>
								<Link to="/tz">TechTask</Link>
							</li>
						</ul>
					</nav>
					<span id="profile">
						<Link to="/profile">Profile</Link>
					</span>
				</header>
				<Switch>
					<Route path="/history">
						<History/>
					</Route>
					<Route path="/">
						<Dashboard/>
					</Route>
					<Route path="/tz">
						<TZ/>
					</Route>
					<Route path="/profile">
						<TZ/>
					</Route>
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
