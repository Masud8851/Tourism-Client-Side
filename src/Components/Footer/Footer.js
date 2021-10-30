import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<div className="footer text-lg-start text-sm-center mt-5">
				<div className="container">
					<div className="row g-5">
						<div className="col-md-4">
							<h1>Tourism</h1>
							<ul>
								<li>About</li>
								<li>For Patients</li>
								<li>FAQs</li>
								<li>Contact Us</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h1>Payment Method</h1>
							<p>
								You can choose many payment options. Tourist satisfiction is our
								goal. So you can pay by -
							</p>
							<ul>
								<li>* Visa Card</li>
								<li>* Master Card</li>
								<li>* bKash</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h1>Services</h1>
							<p>
								We offer so many tour packages. So many packages are available
								by us.
							</p>
							<ul>
								<li>* Vacation Tour Packages</li>
								<li>* City Tour Packages</li>
								<li>* Summer Tour Packages</li>
								<li>* Winter Tour Packages</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<footer className="under-footer">
					<div>
						<p className="pb-3">
							Copyright 2021 <span>TourX</span> | Design By{" "}
							<span>Masudur Rahman</span>
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
