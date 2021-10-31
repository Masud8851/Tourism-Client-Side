import "./App.css";
import Header from "./Components/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import AddNewPackage from "./Components/Admin/AddNewPackage/AddNewPackage";
import Service from "./Components/Service/Service";
import MyBooking from "./Components/Admin/MyBooking/MyBooking";
import ManageBooking from "./Components/Admin/ManageBooking/ManageBooking";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					{/* <Header /> */}
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<PrivateRoute path="/services">
							<Services></Services>
						</PrivateRoute>
						<PrivateRoute path="/service/:id">
							<Service></Service>
						</PrivateRoute>
						<Route path="/mybooking">
							<MyBooking></MyBooking>
						</Route>
						<Route path="/managebooking">
							<ManageBooking></ManageBooking>
						</Route>
						<Route path="/about">
							<About></About>
						</Route>
						<Route path="/contact">
							<Contact></Contact>
						</Route>
						<Route path="/addnewpackage">
							<AddNewPackage></AddNewPackage>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					{/* <Footer /> */}
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
