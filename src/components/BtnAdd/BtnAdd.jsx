import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import style from './BtnAdd.module.css'
export default function BtnAdd(props) {
	const { addPanier } = useContext(GlobalContext);
	return <button className={style.btn} onClick={() => addPanier(props.price)}>ajouter au panier</button>;
}
