import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Services = () => {
	const [packages, setPackages] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/allpackages")
			.then((res) => setPackages(res.data));
	}, []);

	return (
		<div>
			<Header />
			<div className="banner d-flex justify-content-center align-items-center">
				<h1>
					<span className="contact">[ Packages ]</span>
				</h1>
			</div>

			{/* Packages */}
			<Container>
				<Row xs={1} md={3} className="g-4 my-0 py-0">
					{packages?.map((pk) => (
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
			<Footer />
		</div>
	);
};

export default Services;
