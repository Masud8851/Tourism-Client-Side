import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";
const About = () => {
	return (
		<div>
			<Header />
			<div className="banner d-flex justify-content-center align-items-center">
				<h5>
					<span className="contact">[ About us ]</span>
				</h5>
			</div>
			<div className="container">
				<div className="row text-start align-items-center g-5 mb-5">
					<div className="col-md-6 p-4">
						<img
							src="https://i.ibb.co/vcS7bXM/about-1-bcfbc984.png"
							alt=""
							className="w-100"
						/>
					</div>
					<div className="col-md-6 p-4">
						<h3>
							<span>About TourX</span>
						</h3>
						<h2 className="heading">The Best Travel Agency Company.</h2>
						<p className="text-justify">
							Fusce aliquam luctus est, eget tincidunt velit scelerisque
							rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis
							mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada
							venenatis ex, eu fringilla justo scelerisque sit amet. Sed
							fringilla nec purus non venenatis. Aliquam nec turpis pharetra,
							bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.
						</p>
					</div>
				</div>
				<div className="row  text-start align-items-center g-5 mb-5">
					<div className="col-md-6 p-4">
						<h2 className="heading">
							Hike the Swiss Alps and See Spectacular Landscapes
						</h2>
						<p className="text-justify">
							Towering mountains, fairytale villages, and all the Swiss
							chocolate. Yep, a visit to Switzerland is where it's at.
							Switzerland has some impressive natural landscapes that must be
							seen to be believed. So, whether it's taking the journey up the
							Jungfrau Railway for OMG views or heading out on a hike in the
							Alps to breathe in that fresh mountain air, if you end the day
							with some yummy cheese fondue, you're onto a winner. Ready to
							travel to Switzerland with Topdeck? Hop to it.
						</p>
					</div>
					<div className="col-md-6 p-4">
						<iframe
							className="b"
							width="100%"
							height="315"
							src="https://www.youtube.com/embed/linlz7-Pnvw"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>

				{/* About Tour Guide */}
				<h4 className="text-start">
					<span>Tour Guide</span>
				</h4>
				<h4 className="text-start">All Guide Are 5 Year Expart In Travel</h4>
				<div className="row">
					<div class="row row-cols-1 row-cols-md-3 gx-4">
						<div class="col p-2">
							<div class="card h-100">
								<img
									src="https://i.ibb.co/QHjBxPr/guide-1-a5da4cec.png"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Sakura Chen</h5>
									<p class="card-text">Tour Guide</p>
								</div>
							</div>
						</div>
						<div class="col p-2">
							<div class="card h-100">
								<img
									src="https://i.ibb.co/RPP2bNy/guide-3-fe55b700.png"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Sakura Chen</h5>
									<p class="card-text">Tour Guide</p>
								</div>
							</div>
						</div>
						<div class="col p-2">
							<div class="card h-100">
								<img
									src="https://i.ibb.co/0YCbR1Q/guide-4-db1ff982.png"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Sakura Chen</h5>
									<p class="card-text">Tour Guide</p>
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

export default About;
