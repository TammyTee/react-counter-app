import React from "react";

// Stateless Functional Component
// lifecycle hooks can not be used here
const Navbar = ({ totalCounter }) => {
	console.log("Navbar – Rendered");
	return (
		<React.Fragment>
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="//www.google.com">
					Navbar{" "}
					<span className="badge badge-pill badge-primary">{totalCounter}</span>
				</a>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
