import React from "react";
import BtnAdd from "../BtnAdd/BtnAdd";
import style from "./Cards.module.css";
export default function Cards(props) {
	return (
		<article className={style.cards}>
			<h2>{props.title}</h2>
			<picture className={style.imgCtn}>
				<img src={props.src} alt={props.title} />
			</picture>
			<div className={style.txt}>{props.children}</div>
			<BtnAdd price={props.price} />
		</article>
	);
}
