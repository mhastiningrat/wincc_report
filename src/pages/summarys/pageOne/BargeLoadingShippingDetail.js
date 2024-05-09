import React from "react";

const BargeLoadingShippingDetail = () => {
	return (
		<div>
			<h3 className="px-2 pt-4 border-bottom">BARGE LOADING SHIPPING DETAIL</h3>
			<div className="table-respinsive">
				<table className="table table-bordered" style={{ overflowX: "scroll" }}>
					<thead>
						<tr>
							<th>No</th>
							<th>Vessel</th>
							<th>
								<div className="w-100 p-2 text-center">Barge</div>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">Name</div>
									<div className="text-center   p-2">
										Along Side (First Line)
									</div>
									<div className="text-center   p-2">Commenced Loading</div>
									<div className="text-center   p-2">Completed Loading</div>
									<div className="text-center   p-2">Cast Off (Last Line)</div>
									<div className="text-center   p-2">Total Loading Time</div>
								</div>
							</th>
							<th>
								<div className="w-100 p-2 text-center">Weigher Data</div>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">Quality</div>
									<div className="text-center   p-2">Start</div>
									<div className="text-center   p-2">Stop</div>
									<div className="text-center   p-2">Total</div>
								</div>
							</th>
							<th>Tonnes Draft</th>
							<th>Tonnes MCC Recorded</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">1</div>
								</div>
							</td>
							<td>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">vessel name 1</div>
								</div>
							</td>
							<td>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
								</div>
							</td>
							<td>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
									<div className="text-center   p-2">Data Equipment</div>
								</div>
							</td>
							<td>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">Data Equipment</div>
								</div>
							</td>
							<td>
								<div className="d-flex justify-content-around">
									<div className="text-center   p-2">Data Equipment</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BargeLoadingShippingDetail;
