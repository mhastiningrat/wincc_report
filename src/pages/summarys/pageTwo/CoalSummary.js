import axios from "axios";
import moment from "moment";
import React from "react";

const CoalSummary = () => {
	const getDateValue = (e) => {
		console.log(e);
	};

	const print = async() =>{
		let res = await axios.get("https://wincc-report-api.vercel.app/api/summary-page2/export");
		console.log(res)
		if(res){
			window.open("https://wincc-report-api.vercel.app/api/summary-page2/export","_parent")
		}
	}
	return (
		<div>
			<div className="d-flex gap-2 p-4">
				<input type="text" className="form-control-sm" placeholder="Shift" />
				<input
					type="date"
					defaultValue={moment().format("DD/MM/YYYY HH:mm:ss")}
					className="form-control-sm"
					placeholder="Shift"
					onChange={(e) => getDateValue(e.target.value)}
				/>
				<input
					type="time"
					className="form-control-sm"
					placeholder="Shift"
					onChange={(e) => getDateValue(e.target.value)}
				/>
				<button className="btn btn-sm btn-primary">
					<i className="bi bi-search"></i>&nbsp; Find
				</button>
				<button className="btn btn-sm btn-success" onClick={()=>print()}>
					<i className="bi bi-file"></i>&nbsp; Export
				</button>

			</div>
			<table className="table table-responsive table-bordered">
				<thead>
					<tr>
						<th rowSpan={2} colSpan={6}></th>
						<th className="text-center">DATE</th>
						<th className="text-center">SHIFT</th>
						<th className="text-center">CREW</th>
					</tr>
					<tr>
						<td className="text-center">DATE</td>
						<td className="text-center">SHIFT</td>
						<td className="text-center">CREW</td>
					</tr>
					<tr>
						<th colSpan={9} className="text-center">
							DELAY DETAIL{" "}
						</th>
					</tr>
					<tr>
						<th></th>
						<th>Stream</th>
						<th>Start</th>
						<th>Stop</th>
						<th>Delay Time</th>
						<th>Delay Cat</th>
						<th>Equipment</th>
						<th>Delay Code</th>
						<th>Comments</th>
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
						<td>Stream</td>
						<td>Start</td>
						<td>Stop</td>
						<td>Delay Time</td>
						<td>Delay Cat</td>
						<td>Equipment</td>
						<td>Delay Code</td>
						<td>Comments</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CoalSummary;
