import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	const [panier, setPanier] = useState(0);

	const addPanier = (price) => {
		setPanier(panier + price);
		return panier;
	};

	return (
		<GlobalContext.Provider value={{ addPanier, panier , setPanier }}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
