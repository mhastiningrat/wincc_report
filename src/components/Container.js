import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }) => {
	return (
		<div className="px-4">
			<Navbar />
			{children}
		</div>
	);
};

export default Container;
