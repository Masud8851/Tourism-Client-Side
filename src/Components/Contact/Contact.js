import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";

const Contact = () => {
	return (
		<div>
			<Header />
			<div className="banner d-flex justify-content-center align-items-center">
				<h1>
					<span className="contact">[ Contact ]</span>
				</h1>
			</div>
			<div className="container mt-3">
				<div className="row text-start text-justify">
					<div className="col-md-6 p-3">
						<h3 className="mb-4">
							<span>Get In Touch</span>
						</h3>
						<p className="fs-5">
							Suspendisse dolor risus, congue ac diam id, viverra facilisis
							dolor. Cras nec purus sagittis, varius tortor at, maximus erat.
							Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis
							vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra
							quam est ac ex. Cras sed lectus eu.
						</p>
						<div className="d-flex  mb-3">
							<div className="me-3">
								<i class="far fa-clock time"></i>
							</div>
							<div className="d-flex flex-column">
								<h3>
									<span>Open Hour</span>
								</h3>
								<h4>Sat - Thu At</h4>
								<h4>10.00Am to 10.00PM</h4>
							</div>
						</div>
						<div className="d-flex ">
							<div className="me-3">
								<i class="far fa-clock time"></i>
							</div>
							<div className="d-flex flex-column">
								<h3>
									<span>Close Hour</span>
								</h3>
								<h4>Friday Office Close</h4>
							</div>
						</div>
					</div>
					<div className="col-md-6 p-3">
						<h3 className="mb-4">
							<span>Contact Us</span>
						</h3>
						<div>
							<form className="row  align-items-center">
								<div class="col-md-6 touch-input p-2">
									<input
										type="text"
										required
										placeholder="Name"
										className="border-0 p-3 w-100 mb-3"
									/>
								</div>
								<div class="touch-input col-md-6 p-2">
									<input
										type="email"
										required
										placeholder="Email"
										className="border-0 p-3 w-100 mb-3"
									/>
								</div>
							</form>
							<form className="row g-3 align-items-center">
								<div class="touch-input col-md-6 p-2">
									<input
										type="text"
										required
										placeholder="Phone"
										className="border-0 p-3 w-100 mb-3"
									/>
								</div>
								<div class="touch-input col-md-6 p-2">
									<input
										type="text"
										required
										placeholder="Subject"
										className="border-0 p-3 w-100 mb-3"
									/>
								</div>
							</form>
							<form className="row  align-items-center">
								<div class="touch-input col-md-12 p-2 pb-0">
									<textarea
										name="message"
										required
										placeholder="Message"
										className=" text-start border-0 p-3 w-100 mb-3"
									></textarea>
								</div>
							</form>
							<Link
								to="/"
								className="contact-submit-btn  p-2 ms-2"
								type="submit"
							>
								<i class="fas fa-paper-plane"></i> Send
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
