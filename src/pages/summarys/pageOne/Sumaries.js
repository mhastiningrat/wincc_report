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
import axios from "axios";

const Sumaries = () => {
	const print = async() =>{
		let res = await axios.get("https://wincc-report-api.vercel.app/api/summary-page1/export");
		console.log(res)
		if(res){
			window.open("https://wincc-report-api.vercel.app/api/summary-page1/export","_parent")
		}
	}
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
					<button className="btn btn-sm btn-success" onClick={()=>print()}>
					<i className="bi bi-file"></i>&nbsp; Export
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
