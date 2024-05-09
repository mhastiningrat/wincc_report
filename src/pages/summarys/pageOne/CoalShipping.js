import React from "react";

const CoalShipping = () => {
	return (
		<div>
			<h3 className="px-2 pt-4 border-bottom">COAL SHIPPING</h3>
			<div className="d-flex flex-column gap-2">
				<div className="d-flex justify-content-between">
					<div className="d-flex flex-column border bg-light">
						<p className="fw-semibold px-2 text-center border-bottom">
							<button className="btn btn-sm btn-light">
								<i className="bi bi-pencil" />
							</button>
							VESSEL 1 - MV:
						</p>
						<div className="d-flex">
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Reclaimer 1</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Reclaimer 2</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Stamler</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Trestle</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex flex-column border bg-light">
						<p className="fw-semibold px-2 text-center border-bottom">
							<button className="btn btn-sm btn-light">
								<i className="bi bi-pencil" />
							</button>
							VESSEL 2 - MV:
						</p>
						<div className="d-flex">
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Reclaimer 1</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Reclaimer 2</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Stamler</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Trestle</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex flex-column border bg-light">
						<p className="fw-semibold px-2 text-center border-bottom">
							<button className="btn btn-sm btn-light">
								<i className="bi bi-pencil" />
							</button>
							VESSEL 3 - MV:
						</p>
						<div className="d-flex">
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Reclaimer 1</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Reclaimer 2</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Stamler</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">Trestle</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="d-flex flex-column border bg-warning">
						<p className="fw-bold px-2 text-center border-bottom">TOTAL</p>
						<div className="d-flex">
							<div>
								<div className="d-flex">
									<p className="fw-semibold px-2">TOTAL BLF :</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345</p>
								</div>
								<div className="d-flex">
									<p className="fw-semibold px-2">
										TOTAL COAL SHIPPED (VESSEL 1 + VESSEL 2 + VESSEL 3 + BLF):
									</p>
									<p className="fw-semibold px-2">:</p>
									<p className="fw-semibold px-2">12345123455</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoalShipping;
