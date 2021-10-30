import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
	const [packages, setPackages] = useState([]);

	useEffect(() => {
		axios
			.get("https://tourism-by-world.herokuapp.com/allpackages")
			.then((res) => setPackages(res.data));
	}, []);

	return (
		<div>
			<Header />
			{/* Banner */}
			<div className="banner d-flex justify-content-center align-items-center flex-column">
				<h1 className="text-warning"> Find Your Next Tour</h1>
				<div>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-warning" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>

			{/* Book your tour packages */}
			{/* <div className="container mt-0">
				<div className="event-time p-5">
					<form className="d-md-flex flex-row d-sm-block">
						<input
							class="form-control me-2 w-25"
							type="text"
							placeholder="Where to..."
							aria-label="Search"
						/>

						<input class="form-control me-2 w-25" type="date" />

						<select className="w-25" id="type" name="Travel type">
							<option value="volvo">City Tours</option>
							<option value="saab">Vacation Tours</option>
							<option value="fiat">Couple Tours</option>
							<option value="audi">Adventure Tours</option>
							<option value="audi">Group Tours</option>
						</select>

						<Link className="btn btn-warning ms-2 w-25" type="submit">
							Find Now <i class="fas fa-search"></i>
						</Link>
					</form>
				</div>
			</div> */}

			{/* Packages */}

			<Container>
				<div className="d-flex flex-row justify-content-between align-items-center mt-5">
					<div>
						<h1 className="text-success ">Next Packages</h1>
					</div>
					<div>
						<Link to="/services">
							{" "}
							<span id="see-all">
								See all <i class="fas fa-arrow-right"></i>
							</span>{" "}
						</Link>
					</div>
				</div>
				<Row xs={1} md={3} className="g-4 my-0 py-0">
					{packages?.slice(0, 6).map((pk) => (
						<Col>
							<Card className="h-100">
								<Card.Img variant="top" src={pk.img} height="200" />
								<Card.Body className="h-50">
									<Card.Title>{pk.title}</Card.Title>
									<Card.Text>{`${pk.description.slice(0, 200)}...`}</Card.Text>
								</Card.Body>
								<Link to={`/service/${pk._id}`}>
									<button className="btn btn-primary btn-sm mb-2">
										View Details
									</button>
								</Link>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			{/* Behind the reason */}
			<div className="reason">
				{/* <div className="container mt-5">
				<h1 className="mb-5 text-success">[ Hospitality ]</h1>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<div className="col">
						<div className="card h-100 hospitality">
							<img
								src={appointment}
								className="card-img-top rounded mt-3  mx-auto p-2 w-25 m-2"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title m-1">Easy Appointment</h5>
								<p className="card-text m-3">
									Easy Appointment Lorem ipsum dolor sit amet. Lorem ipsum dolor
									sit amet.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100 hospitality">
							<img
								src={emergency}
								className="card-img-top  mx-auto p-2 w-25 m-2"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title m-1">Emergency Service</h5>
								<p className="card-text m-3">
									Emergency Service Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Sed, placeat.{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100 hospitality">
							<img
								src={t427}
								className="card-img-top rounded-circle mx-auto p-2 w-25 m-3"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title m-1">24/7 Service</h5>
								<p className="card-text m-3">
									24/7 Service Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ut quis pariatur expedita?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
