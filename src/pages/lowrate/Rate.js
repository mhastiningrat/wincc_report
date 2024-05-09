import React from "react";

const Rate = () => {
	return (
		<div>
			<div className="text-center p-4">
				<h3>LOWRATE OPS MASTER</h3>
			</div>
			<div className="d-flex gap-2 p-4">
				<input type="text" className="form-control-sm" placeholder="Shift" />
				<input type="date" className="form-control-sm" placeholder="Shift" />
				<input type="time" className="form-control-sm" placeholder="Shift" />
				<button className="btn btn-sm btn-primary">
					<i className="bi bi-search"></i>&nbsp; Find
				</button>
			</div>
			<table className="table table-responsive table-bordered">
				<thead>
					<tr>
						<th></th>
						<th className="text-center">Stream</th>
						<th className="text-center">Start</th>
						<th className="text-center">Stop</th>
						<th className="text-center">Delay Time</th>
						<th className="text-center">CATEGORY</th>
						<th className="text-center">ENTNAME</th>
						<th className="text-center">D.CODE</th>
						<th className="text-center">Comments</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-center">
							<button className="btn btn-sm btn-light">
								<i className="bi bi-pencil"></i>
							</button>
							<button className="btn btn-sm btn-light text-danger">
								<i className="bi bi-trash"></i>
							</button>
						</td>
						<td className="text-center">Stream</td>
						<td className="text-center">Start</td>
						<td className="text-center">Stop</td>
						<td className="text-center">Delay Time</td>
						<td className="text-center">CATEGORY</td>
						<td className="text-center">ENTNAME</td>
						<td className="text-center">D.CODE</td>
						<td className="text-center w-25">Comments</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Rate;
