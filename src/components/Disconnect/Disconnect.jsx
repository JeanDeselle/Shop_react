import { Navigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import style from "./Disconnect.module.css";
import { GlobalContext } from "../../context/globalContext";

export default function Disconnect() {
	const { setPanier } = useContext(GlobalContext);
	const [isLoged, setIsLoged] = useState(true);

	return (
		<>
			{!isLoged && <Navigate to="/" />}
			<button
				onClick={() => {
					setIsLoged(false);
					setPanier(0);
				}}
				className={style.btn}
			>
				Disconnect
			</button>
		</>
	);
}
