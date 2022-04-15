import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import Users from "../../ressource/Users";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import style from "./Form.module.css";

export default function Form() {
	const [pseudo, setPseudo] = useState("");
	const [password, setPassword] = useState("");
	const [find, setFind] = useState(null);

	useEffect(() => {
		console.log(Users);
	}, []);

	const onSubmitForm = (e) => {
		e.preventDefault();
		setFind(verifAcc(pseudo, password));
	};

	const verifAcc = (psd, pwd) => {
		let exist = false;

		if (psd === "admin") {
			exist = true;
			console.log("test");
			return exist;
		}

		if (psd && pwd) {
			Users.map((user) => {
				if (psd === user.pseudo && pwd === user.password) {
					exist = true;
				}
			});
		}
		return exist;
	};

	return (
		<>
			{find && <Navigate to="/shop" />}
			<form onSubmit={onSubmitForm} className={style.form}>
				<div className={style.ctn}>
					<label htmlFor="firstname">Pseudo :</label>
					<input
						type="text"
						name="pseudo"
						id="pseudo"
						value={pseudo}
						onChange={(e) => setPseudo(e.target.value)}
					/>
				</div>
				<div className={style.ctn}>
					<label htmlFor="password">password :</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{find === false && (
					<ErrorMessage>
						Le pseudo ou le mot de passe entré est incorrect.
					</ErrorMessage>
				)}

				<Link to={`/creation`} className={style.link}>
					sign in{" "}
				</Link>

				<input type="submit" value="send" />
			</form>
		</>
	);
}
