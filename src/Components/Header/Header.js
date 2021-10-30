import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<div>
			<div className="nav-head">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light nav-bar">
						<div className="container-fluid align-items-center">
							<img src={logo} alt="" />
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav mx-auto ">
									<li className="nav-item">
										<NavLink
											className="nav-link"
											aria-current="page"
											to="/home"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Home
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/services"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Packages
										</NavLink>
									</li>

									<li className="nav-item ">
										<NavLink
											className="nav-link "
											to="/about"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											About us
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link "
											to="/contact"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Contact
										</NavLink>
									</li>
								</ul>
								<div className="d-flex align-items-center justify-content-center">
									<p></p>
									{user.email ? (
										<div className="d-flex flex-row align-items-center">
											<span>{user.displayName} </span>

											<div className="dropdown">
												<button
													class="btn btn-success m-2 dropdown-toggle"
													type="button"
													id="dropdownMenuButton1"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													Admin
												</button>
												<ul
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton1"
												>
													<li>
														<Link to="/mybooking" class="dropdown-item">
															My Booking
														</Link>
													</li>
													<li>
														<Link class="dropdown-item" to="/managebooking">
															Manage All Bookings
														</Link>
													</li>
													<li>
														<Link to="/addnewpackage" class="dropdown-item">
															Add New Package
														</Link>
													</li>
												</ul>
											</div>
											<button onClick={logOut} className="btn btn-primary m-2">
												Logout
											</button>
										</div>
									) : (
										<NavLink to="/login" className="btn btn-primary m-2">
											Login
										</NavLink>
									)}
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
