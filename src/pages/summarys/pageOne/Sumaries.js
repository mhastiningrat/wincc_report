import React from "react";
import OperatorOnDuty from "./OperatorOnDuty";
import OlcWeigherData from "./OlcWeigherData";
import CoalShipping from "./CoalShipping";
import CoalStacking from "./CoalStacking";
import CoalReclaiming from "./CoalReclaiming";
import BargeLoadingShippingDetail from "./BargeLoadingShippingDetail";
import EquipmentDetail from "./EquipmentDetail";
import Notes from "./Notes";
import Container from "../../../components/Container";

const Sumaries = () => {
	return (
		<Container>
			<div className="container bg-ligth overflow-x-scroll">
				<div className="py-4 d-flex justify-content-center">
					<h3 className="fw-bold">
						COAL TERMINAL SUMMARY REPORT 12 HOURS SHIFT
					</h3>
				</div>
				<div className="d-flex gap-2 p-4">
					<input type="text" className="form-control-sm" placeholder="Shift" />
					<input type="date" className="form-control-sm" placeholder="Shift" />
					<input type="time" className="form-control-sm" placeholder="Shift" />
					<button className="btn btn-sm btn-primary">
						<i className="bi bi-search"></i>&nbsp; Find
					</button>
				</div>
				<OperatorOnDuty />

				<OlcWeigherData />

				<CoalShipping />

				<CoalStacking />

				<CoalReclaiming />

				<BargeLoadingShippingDetail />

				<EquipmentDetail />

				<Notes />
			</div>
		</Container>
	);
};

export default Sumaries;
