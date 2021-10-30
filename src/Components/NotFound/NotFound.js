import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<div className="not-Found align-items-center justify-content-center">
				<div>
					<p className="title">Oh no!!</p>
					{/* <p className="subtitle">You’re either misspelling the URL</p> */}
				</div>
				<div className="text-center">
					<Link className="btn btn-outline-light btn-back" to="/">
						Back to previous page
					</Link>
				</div>
				<div>
					<img
						src="https://i.ibb.co/pbB2c6b/astronaut.png"
						className="astronaut"
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
