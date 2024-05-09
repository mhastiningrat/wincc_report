import React from "react";
import Container from "../../components/Container";
import WeigherData from "./WeigherData";

const Weigher = () => {
	return (
		<Container>
			<div className="container bg-ligth overflow-x-scroll">
				<div className="py-4 d-flex justify-content-center">
					<h3 className="fw-bold">WEIGHER REPORT</h3>
				</div>
				<WeigherData />
			</div>
		</Container>
	);
};

export default Weigher;
