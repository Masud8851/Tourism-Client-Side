import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
	const { signInWithGoogle, setUser, setIsLoading } = useAuth();
	const history = useHistory();
	const location = useLocation();
	const url = location.state?.from || "/home";

	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((res) => {
				setIsLoading(true);
				setUser(res.user);
				history.push(url);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<div>
			<Header />
			<div className="text-center banner d-flex flex-column justify-content-center align-items-center">
				<h2 className="login">Please Login</h2>
				<button className="btn btn-warning" onClick={handleGoogleLogin}>
					Google Sign In
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
