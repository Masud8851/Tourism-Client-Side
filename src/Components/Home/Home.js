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
					<Link to="/services" className="btn btn-outline-warning">
						Book Now
					</Link>
				</div>
			</div>

			{/* Packages */}

			<Container className="mt-5">
				<h1>
					<span> Choose Your Best Package </span>
				</h1>
				<div className="d-flex flex-row justify-content-between align-items-center mt-3">
					<div>
						<h1 className="text-success ">Our Next Packages</h1>
					</div>
					<div>
						<Link to="/services">
							{" "}
							<span id="see-all">
								See all <i className="fas fa-arrow-right"></i>
							</span>{" "}
						</Link>
					</div>
				</div>
				<Row xs={1} md={3} className="g-4 my-0 py-0">
					{packages?.slice(0, 6).map((pk) => (
						<Col className="p-2">
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
			<div className="container mt-5 ">
				<h1 className="mb-4">
					<span>Why You Are Travel With Tourx</span>
				</h1>
				<div className="row g-5">
					<div className="col-md-3 p-2">
						<img
							src="https://i.ibb.co/fxtRS4Y/Capture.jpg"
							className="card-img-top"
							alt="..."
							height="200px"
						/>
					</div>
					<div className="col-md-3 p-2">
						<img
							src="https://i.ibb.co/r3Gk8sS/4.jpg"
							className="card-img-top"
							alt="..."
							height="200px"
						/>
					</div>
					<div className="col-md-3 p-2">
						<div className="card bg-success">
							<img
								src="https://i.ibb.co/pQ74QVm/2.jpg"
								className="card-img-top"
								alt="..."
								height="200px"
							/>
						</div>
					</div>
					<div className="col-md-3 p-2">
						<img
							src="https://i.ibb.co/r3Gk8sS/3.jpg"
							className="card-img-top"
							alt="..."
							height="200px"
						/>
					</div>
				</div>
			</div>

			<div className="container mt-5">
				<h1>
					<span id="traveller">What Our Traveller Say About Us</span>
				</h1>
			</div>
			<div className="mt-5 ">
				<div className="container mt-5">
					<div className="row row-cols-1 row-cols-md-3 g-4">
						<div className="col p-3">
							<div className="card people h-100">
								<img
									src="https://i.ibb.co/0srGhQn/reviewer-1-07859027.png"
									className="card-img-top rounded mt-3  mx-auto p-2 w-25 m-2"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title m-1">Dina Jems</h5>
									<h6>Traveller</h6>
									<p className="card-text m-3">
										Enjoy the trip!Have a blast and don't enjoy it too much!I
										hope you have smooth skies!
									</p>
								</div>
							</div>
						</div>
						<div className="col p-3">
							<div className="card people h-100">
								<img
									src="https://i.ibb.co/Msn90Pg/reviewer-2-52e03342.png"
									className="card-img-top rounded-circle  mx-auto p-2 w-25 m-2"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title m-1">Jahid Hasan</h5>
									<h6>Traveller</h6>
									<p className="card-text m-3">
										Enjoy the trip!Have a blast and don't enjoy it too much!I
										hope you have smooth skies!
									</p>
								</div>
							</div>
						</div>
						<div className="col p-3">
							<div className="card people h-100">
								<img
									src="https://i.ibb.co/cx7p5MC/reviewer-3-21d99f5c.png"
									className="card-img-top rounded-circle mx-auto p-2 w-25 m-3"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title m-1">Shawan Paull</h5>
									<h6>Traveller</h6>
									<p className="card-text m-3">
										Enjoy the trip!Have a blast and don't enjoy it too much!I
										hope you have smooth skies!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
