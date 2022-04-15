import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./context/globalContext";
import CreationPage from "./pages/CreationPage/CreationPage";
function App() {
	return (
		<div className="App">
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/creation" element={<CreationPage />} />
				</Routes>
			</GlobalContextProvider>
		</div>
	);
}

export default App;

