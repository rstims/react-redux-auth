import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';


class NavigationBar extends React.Component {
 	logout(e){
 		e.preventDefault();
 		this.props.logout();
 	}
	render() {
		const { isAuthenticated } = this.props.auth;

		const userLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><Link to="/register">Register</Link></li>
				<li><a onClick={this.logout.bind(this)} href="#">Logout</a></li>
			</ul>
		);

		const guestLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><Link to="/login">Login</Link></li>
			</ul>
		);

		return (
		  <nav className="navbar navbar-default">
		    <div className="container-fluid">
		      <div className="navbar-header">
		        <Link to="/" className="navbar-brand">Auth Starter</Link>
		      </div>

		      <div className="collapse navbar-collapse">
		      	{ isAuthenticated ? userLinks : guestLinks }
		      </div>
		    </div>
		  </nav>
		);
	}
}

NavigationBar.propTypes = {
	auth: React.PropTypes.object.isRequired,
	logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, { logout })(NavigationBar);