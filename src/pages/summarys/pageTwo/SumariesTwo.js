import React from "react";
import CoalSummary from "./CoalSummary";
import Container from "../../../components/Container";

const SumariesTwo = () => {
	return (
		<Container>
			<div className="container bg-ligth overflow-x-scroll">
				<div className="py-4 d-flex justify-content-center">
					<h3 className="fw-bold">
						COAL TERMINAL SUMMARY REPORT 12 HOURS SHIFT
					</h3>
				</div>
				<CoalSummary />
			</div>
		</Container>
	);
};

export default SumariesTwo;
