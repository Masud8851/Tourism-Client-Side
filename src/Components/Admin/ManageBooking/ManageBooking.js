import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Modal } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const ManageBooking = () => {
	const [allBookings, setAllBookings] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		axios
			.get(`https://tourism-by-world.herokuapp.com/allBookings`)
			.then((res) => {
				setAllBookings(res.data);
			});
	}, []);

	// Approve
	const handleApprove = (id) => {
		axios
			.put(`https://tourism-by-world.herokuapp.com/bookingUpdate/${id}`, {})
			.then((res) => {
				console.log(res);
				const remain = allBookings.filter((book) => book._id !== id);
				setAllBookings(remain);
			});
	};

	// Delete
	const handleDelete = (id) => {
		axios
			.delete(`https://tourism-by-world.herokuapp.com/myBooking/${id}`)
			.then((res) => {
				console.log(res);
				const remain = allBookings.filter((book) => book._id !== id);
				setAllBookings(remain);
			});
	};
	return (
		<div>
			<Header />
			<div>
				<h2>Manage All Bookings {allBookings.length}</h2>

				<div className="row justify-content-center">
					{allBookings.map((book) => (
						<Card style={{ width: "18rem" }} className="m-3">
							<Card.Img
								variant="top"
								src={book.img}
								style={{ height: "200px" }}
							/>
							<Card.Body>
								<Card.Title>{book.title}</Card.Title>
								<Card.Text>{book.email}</Card.Text>
							</Card.Body>

							<Card.Body>
								<button
									className="btn btn-success m-2"
									onClick={() => {
										handleApprove(book._id);
									}}
								>
									Approved
								</button>
								<button
									onClick={() => handleDelete(book._id)}
									className="btn btn-danger m-2"
								>
									Delete
								</button>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ManageBooking;
