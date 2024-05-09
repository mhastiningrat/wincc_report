import React from "react";
import Container from "../../components/Container";
import VesselData from "./VesselData";

const VesselLoading = () => {
	return (
		<Container>
			<div className="container bg-ligth overflow-x-scroll">
				<div className="py-4 d-flex justify-content-center">
					<h3 className="fw-bold">SHIPPING REPORT - VESSEL LOADING</h3>
				</div>
				<VesselData />
			</div>
		</Container>
	);
};

export default VesselLoading;
