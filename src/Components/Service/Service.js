import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Service.css";
import ClipLoader from "react-spinners/ClipLoader";

const Service = () => {
	const { user } = useAuth();
	const { id } = useParams();
	const [item, setItem] = useState({});

	useEffect(() => {
		axios
			.get(`https://tourism-by-world.herokuapp.com/package/${id}`)
			.then((res) => setItem(res.data));
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		alert("Are you sure to book your package?");
		console.log(data);
		data.status = "Pending";
		data.img = item.img;
		axios
			.post(`https://tourism-by-world.herokuapp.com/addorder`, data)
			.then((res) => {
				console.log(res);
				reset();
			});
	};

	return (
		<div>
			<Header />
			<div className="manageBooking">
				<div className="banner d-flex justify-content-center align-items-center">
					<h1>
						<span className="contact">
							Package Details & <br /> Booking
						</span>
					</h1>
				</div>

				<Container className="text-center justify-content-center mt-5 mb-5">
					<div className="row">
						<div className="col-md-6 mb-5">
							<Card className="h-100">
								<Card.Img variant="top" src={item?.img} height="200" />
								<Card.Body>
									<Card.Title className="d-flex justify-content-between border-2 border-success pb-2 border-bottom">
										<div>
											<span>
												<i class="fas fa-map-marker-alt"></i>
											</span>{" "}
											{item?.title}
										</div>

										<div>
											<span>
												<i class="fas fa-clock"></i>
											</span>{" "}
											{item?.duration}
										</div>
										<div>
											<span>
												<i class="fas fa-users"></i>
											</span>{" "}
											{item?.size}
										</div>
									</Card.Title>
									<Card.Text className="text-justify text-start">
										{item?.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</div>

						<div className="col-md-6">
							<h3 className="text-success">Confirm Your Booking</h3>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="row ">
									<div className="col-md-6 p-2">
										<input
											{...register("name")}
											value={user.displayName}
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-6 p-2">
										<input
											{...register("email")}
											value={user.email}
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-12 p-2">
										<input
											{...register("title")}
											value={item.title}
											className="p-2 m-2 w-100 rounded border-1 package-input"
											required
										/>
									</div>

									<div className="col-md-6 p-2">
										<input
											{...register("phone")}
											placeholder="Phone number"
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-6 p-2">
										<input
											{...register("address")}
											placeholder="Address"
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>
								</div>

								{errors.exampleRequired && <span>Required!</span>}

								<input
									// onClick={handleOnClick}
									type="submit"
									value="Book Now"
									className="contact-submit-btn m-2 p-2 ps-4 pe-4 mt-3 ms-0"
								/>
							</form>
						</div>
					</div>
				</Container>
			</div>

			<Footer />
		</div>
	);
};

export default Service;
