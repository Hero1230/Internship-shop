import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useItems } from "../context/ItemsContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";

type CartItem = {
	id: string;
	quantity: number;
};

type CartProps = {
	isOpen: boolean;
	cartItems: CartItem[];
};

const Cart = ({ isOpen, cartItems }: CartProps) => {
	const { items } = useItems();
	const { closeCart } = useCart();
	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton style={{ zIndex: 1 }}>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
					<div className="ms-auto fw-bold fs-5">
						Total{" "}
						{formatCurrency(
							cartItems.reduce((total, currentCartItem) => {
								const item = items.find((i) => i.id === currentCartItem.id);
								return total + (item?.price || 0) * currentCartItem.quantity;
							}, 0)
						)}
					</div>
					{cartItems.length === 0 && (
						<div
							className="text-center d-flex align-items-center justify-content-center"
							style={{
								width: "100%",
								height: "100%",
								position: "absolute",
								top: 0,
								right: 0,
								fontSize: "2rem",
							}}>
							{" "}
							<p>Your cart is empty!</p>
						</div>
					)}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default Cart;
