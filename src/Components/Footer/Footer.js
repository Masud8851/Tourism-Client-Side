import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<div className="footer text-lg-start text-sm-center mt-5">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h1>Practice</h1>
							<ul>
								<li>About</li>
								<li>For Patients</li>
								<li>FAQs</li>
								<li>Contact Us</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h1>Resources</h1>
							<ul>
								<li>New Patients</li>
								<li>Meet the Team</li>
								<li>Patient Form</li>
								<li>Insurance</li>
								<li>Account Login</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h1>Services</h1>
							<ul>
								<li>Dental Dictionary</li>
								<li>Dental Sealands</li>
								<li>Dental Implants</li>
								<li>General Dentistry</li>
								<li>Sedation Dentistry</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h1>Our Address</h1>
							<ul>
								<li>Datobbo Dentistry 5212 </li>
								<li>Village Dr Mason, NY.</li>
								<li>Phone:+1 3500 5867 340</li>
								<li>Email:yourdomain@gmail.com</li>
								<li>Fax:+1 675 5867 340</li>
							</ul>
						</div>
					</div>
				</div>
				<footer className="under-footer">
					<div>
						<p>©️ All Copyrigths reserver by ThemeForest</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
