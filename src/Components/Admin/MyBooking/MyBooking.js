import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./MyBooking.css";

const MyBooking = () => {
	const { user } = useAuth();
	const [myBookings, setmyBookings] = useState([]);

	useEffect(() => {
		axios
			.get(`https://tourism-by-world.herokuapp.com/myBooking/${user?.email}`)
			.then((res) => {
				setmyBookings(res.data);
			});
	}, []);

	const handleDelete = (id) => {
		axios
			.delete(`https://tourism-by-world.herokuapp.com/myBooking/${id}`)
			.then((res) => {
				console.log(res);
				const remain = myBookings.filter((book) => book._id !== id);
				setmyBookings(remain);
			});
	};
	console.log(myBookings);
	return (
		<div>
			<Header />
			<h2>
				Booking <span>Status</span>
			</h2>

			<div className="row mb-5">
				{myBookings.map((book) => (
					<div className="col-md-6  m-0 rounded">
						<div className="row over mb-3 m-0 align-items-center">
							<div className="col-md-4 ">
								<img src={book.img} alt="" width="150px" className="rounded" />
							</div>
							<div className="col-md-8 m-0 status">
								<h4>{book.title}</h4>

								<h5>
									Status: <span>{book.status}</span>
								</h5>

								<Button
									onClick={() => handleDelete(book._id)}
									className="btn btn-danger m-2"
								>
									Delete
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>

			<Footer />
		</div>
	);
};

export default MyBooking;
