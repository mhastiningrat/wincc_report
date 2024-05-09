import React from "react";

const CoalStacking = () => {
	return (
		<div>
			<h3 className="px-2 pt-4 border-bottom">COAL STACKING (INCOMING)</h3>
			<table className="table table-responsive table-bordered table-scroll">
				<thead>
					<tr>
						<th rowSpan={2} className=" p-2 text-center align-middle">
							Equipment
						</th>
						<th>
							<div className="w-100 p-2 text-center">Prima</div>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">South</div>
								<div className="text-center   p-2">North</div>
							</div>
						</th>
						<th>
							<div className="w-100 p-2 text-center">Pinang</div>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">South</div>
								<div className="text-center   p-2">North</div>
							</div>
						</th>
						<th>
							<div className="w-100 p-2 text-center">Melawan</div>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">South</div>
								<div className="text-center   p-2">North</div>
							</div>
						</th>
						<th>
							<div className="w-100 p-2 text-center">Position</div>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">South</div>
								<div className="text-center   p-2">North</div>
							</div>
						</th>
						<th>
							<div className="w-100 p-2 text-center">Total</div>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">South</div>
								<div className="text-center   p-2">North</div>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className=" p-2">
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">Data Equipment</div>
							</div>
						</td>
						<td>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">data prima s</div>
								<div className="text-center   p-2">data prima n</div>
							</div>
						</td>
						<td>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">data pinang s</div>
								<div className="text-center   p-2">data pinang n</div>
							</div>
						</td>
						<td>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">data melawan s</div>
								<div className="text-center   p-2">data melawan n</div>
							</div>
						</td>
						<td>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">data Position s</div>
								<div className="text-center   p-2">data position n</div>
							</div>
						</td>
						<td>
							<div className="d-flex justify-content-around">
								<div className="text-center   p-2">data total s</div>
								<div className="text-center   p-2">data total n</div>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan={5}>
							<div className="d-flex justify-content-center bg-warning">
								<div className="text-center fw-bold p-2">TOTAL STACKING</div>
							</div>
						</td>
						<td>
							<div className="d-flex justify-content-around bg-warning">
								<div className="text-center p-2">total s</div>
								<div className="text-center p-2">total n</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CoalStacking;
