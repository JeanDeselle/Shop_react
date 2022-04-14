import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import style from './Panier.module.css'
export default function Panier() {
	const { panier } = useContext(GlobalContext);
	

	return (
		<div className={style.ctn}>	
		<i className={"fas fa-basket-shopping "+style.logo}></i>
			<p className={style.price}> 
				<span>{panier}</span>€
			</p>
		</div>
	);
}
