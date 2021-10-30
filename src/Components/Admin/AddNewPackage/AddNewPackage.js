import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./AddNewPackage.css";

const AddNewPackage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios.post(`http://localhost:5000/addpackage`, data).then((res) => {
			console.log(res);
		});
	};

	return (
		<div>
			<Header />
			<div className="banner d-flex justify-content-center align-items-center">
				<h1>
					<span className="contact">[ Add New Package ]</span>
				</h1>
			</div>

			{/* Add Packages */}
			<div className=" my-2 p-4 w-50 rounded mx-auto">
				<h2 className="text-success">
					<i class="fas fa-plus-square fs-3"></i> Package
				</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row ">
						<div className="col-md-12 ">
							<input
								{...register("title")}
								placeholder="Pakage Title"
								className="p-2 m-2 w-100 rounded border-1 package-input"
							/>
						</div>
						<div className="col-md-4">
							<input
								{...register("duration")}
								placeholder="Duration"
								className="p-2 m-2 w-100 rounded border-1 package-input"
							/>
						</div>

						<div className="col-md-4">
							<input
								{...register("type")}
								placeholder="Tour Type"
								className="p-2 m-2 w-100 rounded border-1 package-input"
							/>
						</div>

						<div className="col-md-4">
							<input
								{...register("size")}
								placeholder="Max Group Size"
								className="p-2 m-2 w-100 rounded border-1 package-input"
							/>
						</div>

						<div className="col-md-12">
							<input
								{...register("img")}
								placeholder="Image URL"
								className="p-2 m-2 w-100 rounded border-1 package-input"
							/>
						</div>

						<div className="col-md-12">
							<textarea
								{...register("description")}
								placeholder="Descriptions"
								className="p-2 m-2 w-100 rounded border-1 package-input"
							/>
						</div>
					</div>

					{errors.exampleRequired && <span>Required!</span>}

					<input
						type="submit"
						value="Add"
						className="contact-submit-btn m-2 p-2 ps-4 pe-4 mt-0 ms-0"
					/>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default AddNewPackage;
