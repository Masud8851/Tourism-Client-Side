import axios from "axios";
import React, { useEffect, useState } from "react";
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
			<h2>Total Booking: {myBookings.length} </h2>

			<div className="row">
				{myBookings.map((book) => (
					<div className="col-md-6  m-0 rounded">
						<div className="row over mb-3 m-0 align-items-center">
							<div className="col-md-4 ">
								<img src={book.img} alt="" width="150px" className="rounded" />
							</div>
							<div className="col-md-8 m-0 status">
								<h4>{book.title}</h4>
								<p>{book.email}</p>
								<h5 className="text-primary">Status: {book.status}</h5>
								<button
									onClick={() => handleDelete(book._id)}
									className="btn btn-danger m-2"
								>
									Delete
								</button>
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
