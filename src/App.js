import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./context/globalContext";
function App() {
	return (
		<div className="App">
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/shop" element={<ShopPage />} />
				</Routes>
			</GlobalContextProvider>
		</div>
	);
}

export default App;
