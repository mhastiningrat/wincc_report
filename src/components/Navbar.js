import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="d-flex justify-content-center gap-2 navbar navbar-expand-lg navbar-light bg-light">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Lowrate
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/summary">
						Summary Page 1
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/summary2">
						Summary Page 2
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/shippingReport">
						Shiiping Report
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/weigherReport">
						Weigher Report
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
