import React from "react";

const HeadEnd = () => {
	return (
		<div className="py-4">
			<table className="table table-responsive table-bordered">
				<thead>
					<tr>
						<th colSpan={5} className="text-center bg-warning">
							HEAD END VIRTUAL WEIGHER (OLC-1)
						</th>
						<th colSpan={5} className="text-center bg-warning">
							RECLAIMING-2 & STACKING-2 CONVEYOR WEIGHER
						</th>
						<th rowSpan={2} className="text-center align-middle bg-warning">
							TOTAL COAL CONVEYED (AT TBCT)
						</th>
					</tr>
					<tr>
						<th className="text-center bg-warning">PRIMA</th>
						<th className="text-center bg-warning">PINANG</th>
						<th className="text-center bg-warning">MELAWAN</th>
						<th className="text-center bg-warning">MLW42</th>
						<th className="text-center bg-warning">TOTAL</th>
						<th className="text-center bg-warning">PRIMA</th>
						<th className="text-center bg-warning">PINANG</th>
						<th className="text-center bg-warning">MELAWAN</th>
						<th className="text-center bg-warning">MLW42</th>
						<th className="text-center bg-warning">TOTAL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-center">1231</td>
						<td className="text-center">43534</td>
						<td className="text-center">6353</td>
						<td className="text-center">4321</td>
						<td className="text-center">345345</td>
						<td className="text-center">143112</td>
						<td className="text-center">3141</td>
						<td className="text-center">45235</td>
						<td className="text-center">4352</td>
						<td className="text-center">764</td>
						<td className="text-center">7644563</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default HeadEnd;
