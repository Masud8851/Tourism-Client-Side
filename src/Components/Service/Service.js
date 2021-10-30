import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Service = () => {
	const { user } = useAuth();
	const { id } = useParams();
	const [item, setItem] = useState({});
	useEffect(() => {
		axios
			.get(`http://localhost:5000/package/${id}`)
			.then((res) => setItem(res.data));
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		data.status = "Pending";
		data.img = item.img;
		axios.post(`http://localhost:5000/addorder`, data).then((res) => {
			console.log(res);
			reset();
		});
	};

	return (
		<div>
			<Header />
			<div>
				<div className="banner d-flex justify-content-center align-items-center">
					<h1>
						<span className="contact">[ Tour Details ]</span>
					</h1>
				</div>

				<Container className="text-center justify-content-center mt-5">
					<div className="row">
						<div className="col-md-6">
							<Card className="h-100">
								<Card.Img variant="top" src={item?.img} height="200" />
								<Card.Body>
									<Card.Title>{item?.title}</Card.Title>
									<Card.Text className="text-justify text-start">
										{item?.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
						<div className="col-md-6">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="row ">
									<div className="col-md-6 ">
										<input
											{...register("name")}
											placeholder="User Name"
											value={user.displayName}
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-6">
										<input
											{...register("email")}
											placeholder="User Email"
											value={user.email}
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-12">
										<input
											{...register("title")}
											placeholder="Title"
											value={item.title}
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-6">
										<input
											{...register("phone")}
											placeholder="Phone number"
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>

									<div className="col-md-6">
										<input
											{...register("address")}
											placeholder="Address"
											className="p-2 m-2 w-100 rounded border-1 package-input"
										/>
									</div>
								</div>

								{errors.exampleRequired && <span>Required!</span>}

								<input
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
