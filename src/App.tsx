import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { ItemsContextProvider } from "./context/ItemsContext";

function App() {
	return (
		<ItemsContextProvider>
			<CartProvider>
				<Navbar />
				<Container className="mb-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Container>
			</CartProvider>
		</ItemsContextProvider>
	);
}

export default App;
