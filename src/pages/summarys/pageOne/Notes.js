import React from "react";

const Notes = () => {
	return (
		<div>
			<h3 className="px-2 pt-4 border-bottom">NOTES</h3>
			<textarea rows={4} placeholder="notes" className="form-control" />
		</div>
	);
};

export default Notes;
