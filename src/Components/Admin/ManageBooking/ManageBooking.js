import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const ManageBooking = () => {
	const [allBookings, setAllBookings] = useState([]);

	useEffect(() => {
		axios
			.get(`https://tourism-by-world.herokuapp.com/allBookings`)
			.then((res) => {
				setAllBookings(res.data);
			});
	}, []);

	// Approve
	const handleApprove = (id) => {
		const proceed = window.confirm("Do you want to approve booking?");
		if (proceed) {
			axios
				.put(`https://tourism-by-world.herokuapp.com/bookingUpdate/${id}`, {})
				.then((res) => {
					console.log(res);
					const remain = allBookings.filter((book) => book._id !== id);
					setAllBookings(remain);
				});
		}
	};

	// Delete
	const handleDelete = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			axios
				.delete(`https://tourism-by-world.herokuapp.com/myBooking/${id}`)
				.then((res) => {
					console.log(res);
					const remain = allBookings.filter((book) => book._id !== id);
					setAllBookings(remain);
				});
		}
	};
	return (
		<div>
			<Header />
			<div>
				<h2>
					Booking <span>Request </span> : {allBookings.length}
				</h2>

				<div className="row justify-content-center">
					{allBookings.map((book) => (
						<Card style={{ width: "18rem" }} className="m-3">
							<Card.Img
								variant="top"
								src={book.img}
								style={{ height: "200px" }}
							/>
							<Card.Body className="text-start">
								<Card.Title>{book.title}</Card.Title>
								<Card.Text>
									{book.name} {book.email}
								</Card.Text>
							</Card.Body>

							<Card.Body className="text-start">
								<button
									className="btn btn-success m-2 mt-0"
									onClick={() => {
										handleApprove(book._id);
									}}
								>
									Approved
								</button>
								<button
									onClick={() => handleDelete(book._id)}
									className="btn btn-danger m-2 mt-0"
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
