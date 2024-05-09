import React from "react";

const OlcWeigherData = () => {
	return (
		<div>
			<h3 className="px-2 pt-4 border-bottom">OLC WEIGHER DATA</h3>
			<div className="d-flex gap-4">
				<div className="d-flex flex-column border bg-light">
					<p className="fw-semibold px-2 text-center border-bottom">
						Prima{" "}
						<button className="btn btn-sm btn-light">
							<i className="bi bi-pencil" />
						</button>
					</p>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 1</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 2</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
				</div>
				<div className="d-flex flex-column border bg-light">
					<p className="fw-semibold px-2 text-center border-bottom">
						Pinang
						<button className="btn btn-sm btn-light">
							<i className="bi bi-pencil" />
						</button>
					</p>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 1</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 2</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
				</div>
				<div className="d-flex flex-column border bg-light">
					<p className="fw-semibold px-2 text-center border-bottom">
						Melawan
						<button className="btn btn-sm btn-light">
							<i className="bi bi-pencil" />
						</button>
					</p>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 1</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 2</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
				</div>
				<div className="d-flex flex-column border bg-warning">
					<p className="fw-semibold px-2 text-center border-bottom">Total</p>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 1</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345</p>
					</div>
					<div className="d-flex">
						<p className="fw-semibold px-2">OLC 2</p>
						<p className="fw-semibold px-2">:</p>
						<p className="fw-semibold px-2">12345123455</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OlcWeigherData;
