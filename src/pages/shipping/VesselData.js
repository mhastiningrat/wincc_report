import React from "react";

const VesselData = () => {
	return (
		<div>
			<div className="row mt-1">
				<div className="col-md-2 fw-semibold">SHIP NAME</div>
				<div className="col-md-10 d-flex gap-4">
					: <input className="form-control-md" type="text"></input>
				</div>
			</div>
			<div className="row mt-1">
				<div className="col-md-2 fw-semibold">NO OF HATCH</div>
				<div className="col-md-10 d-flex gap-4">
					: <input className="form-control-md" type="text"></input>
				</div>
			</div>
			<div className="row mt-1">
				<div className="col-md-2 fw-semibold">SHIP CAPACITY</div>
				<div className="col-md-10 d-flex gap-4">
					: <input className="form-control-md" type="text"></input>
				</div>
			</div>
			<div className="row mt-1">
				<div className="col-md-2 fw-semibold">TOTAL TONNES LOADED</div>
				<div className="col-md-10 d-flex gap-4">
					: <input className="form-control-md" type="text"></input>
				</div>
			</div>
			{/* ==========================================  spearator */}
			<div className="row mt-5">
				<div className="col-md-6">
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">SHIP BERTHED DATE</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">LOADING START DATE</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">SHIP BERTHED TIME</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">LOADING START TIME</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
				</div>
			</div>
			{/* ========================================== separator */}
			<div className="row mt-5">
				<div className="col-md-6">
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">LOADING FINISHED DATE</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">SHIP DEBERTH DATE</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">SHIP DEPARTH DATE</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">LOADING FINISHED TIME</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">SHIP DEBERTH TIME</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">SHIP DEPARTH TIME</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
				</div>
			</div>
			{/* ========================================== separator */}
			<div className="row mt-5">
				<div className="col-md-6">
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">TRESTLE BELT SCALE</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">
							NORTH TRANSFER BELT SCALE
						</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">
							SOUTH TRANSFER BELT SCALE
						</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">DRAFT SURVEY</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">TRESTLE ERROR</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
					<div className="row mt-1">
						<div className="col-md-4 fw-semibold">TRANSFER ERROR</div>
						<div className="col-md-8 d-flex gap-4">
							: <input className="form-control-md" type="text"></input>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VesselData;
