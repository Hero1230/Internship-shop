import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
	const { openCart, cartQuantity } = useCart();
	return (
		<NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to={"/"} as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to={"/about"} as={NavLink}>
						About
					</Nav.Link>
				</Nav>
				<Button
					style={{ width: "4rem", height: "4rem", position: "relative" }}
					variant="outline-primary"
					className="rounded-circle"
					onClick={openCart}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						data-name="Layer 1"
						viewBox="0 0 24 24">
						<path d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z" />
					</svg>
					<div
						className="rounded-circle bg-danger justify-content-center align-items-center"
						style={{
							color: "white",
							width: "1.5rem",
							height: "1.5rem",
							position: "absolute",
							bottom: 0,
							right: 0,
							transform: "translate(25%, 25%)",
						}}>
						{cartQuantity}
					</div>
				</Button>
			</Container>
		</NavbarBs>
	);
};

export default Navbar;
