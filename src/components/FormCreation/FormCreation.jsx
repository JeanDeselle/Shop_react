import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Users from "../../ressource/Users";
import { Navigate, Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import style from "./FormCreation.module.css";
export default function FormCreation() {
	const [pseudo, setPseudo] = useState("");
	const [password, setPassword] = useState("");
	const [captcha, setCaptcha] = useState(false);
	const [err, setErr] = useState(null);
	const [redirect, setRedirect] = useState(null);

	const onChangeCAPTCHA = () => {
		setCaptcha(true);
	};

	const validateForm = (e) => {
		e.preventDefault();
		verifInput();
	};

	const verifInput = () => {
		const validPseudo = verifPseudo(pseudo);
		const validPassword = validatePassword(password);
		const validCaptcha = captcha;
		if (validPseudo && validPassword && validCaptcha) {
			setErr(null);
			//TODO add si il existe pas ajt la verif
			const result = Users.find((user) => user.pseudo === pseudo);
			if (!result) {
				//TODO add contact et move to login page
				Users.push({
					id: Users.length,
					pseudo: pseudo,
					password: password,
				});
				setRedirect(true);
			} else {
				setErr("le pseudo existe deja");
			}
		} else {
			if (!validPseudo) {
				setErr(
					"le pseudo doit commencer par 2 lettres, max 3 chiffres en fin de pseudo, 20 caractères maximum,Aucun espaces, ni tiret, ni caractères spéciaux"
				);
				console.log("pseudo ", validPseudo);
			} else if (!validPassword) {
				setErr(
					"le mot de passe doit avoir entre 8 à 15 caractères au moins une minuscule au moins une majuscule au moins un chiffre au moins un caractères spécial"
				);
				console.log("password ", validPassword);
			} else {
				setErr("Veuillez cochez le CAPTCHA");
				console.log("catcha ", validCaptcha);
			}
		}
	};

	const verifPseudo = (pseudo) => {
		/**
		 ** le pseudo doit commencer par au moins 2 lettres,
		 ** il peut avoir de 0 à 3 chiffres en fin de pseudo,
		 ** il doit être de 20 caractères maximum (avec ou sans chiffres).
		 ** Aucun espaces, ni tiret, ni caractères spéciaux.
		 */
		return String(pseudo).match(
			/^[a-zA-Z]{2,20}$|^[a-zA-Z]{2,19}[0-9]{1}$|^[a-zA-Z]{2,18}[0-9]{2}$|^[a-zA-Z]{2,17}[0-9]{3}$/
		);
	};

	const validatePassword = (password) => {
		/**
		 ** le mot de passe doit avoir entre 8 à 15
		 ** caractères au moins une minuscule au moins une
		 ** majuscule au moins un chiffre au moins un caractères spécial
		 */
		return String(password).match(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/
		);
	};

	return (
		<>
			{redirect && <Navigate to="/" />}
			<form onSubmit={validateForm} className={style.form}>
				{err && <ErrorMessage>{err}</ErrorMessage>}
				<p>*Champ requis</p>
				<label htmlFor="pseudo">*Pseudo :</label>
				<input
					type="text"
					id="pseudo"
					value={pseudo}
					onChange={(e) => setPseudo(e.target.value)}
				/>

				<label htmlFor="password">*Password :</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<ReCAPTCHA
					className={style.captcha}
					sitekey="6LebU3QfAAAAAJT0W1JfSzKqq7ZnE38T2JvA53ct"
					onChange={onChangeCAPTCHA}
				/>

				<input type="submit" value="S'inscrire" />
			</form>
		</>
	);
}
