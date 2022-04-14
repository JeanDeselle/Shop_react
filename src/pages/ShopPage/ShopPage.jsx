import React from "react";
import Panier from "../../components/Panier/Panier";
import Disconnect from "../../components/Disconnect/Disconnect";
import Products from "../../ressource/tab";
import Cards from "../../components/Cards/Cards";
import style from "./Shop.module.css";
export default function ShopPage() {
	return (
		<main className={style.main}>
			<Panier />
			<Disconnect />
			<h1 className={style.title}>Site de thé</h1>
			<section className={style.ctn}>
				{Products.map((the) => {
					return (
						<Cards
							key={the.id}
							title={the.name}
							src={the.imgName}
							res={"this.responce.bind(this)"}
							price={the.price}
						>
							<div>
								<p>description : {the.description}</p>
								<span
								>prix : {the.price} €</span>
							</div>
						</Cards>
					);
				})}
			</section>
		</main>
	);
}
