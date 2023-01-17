import { Button, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useItems } from "../context/ItemsContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
	id: string;
	quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
	const { items } = useItems();
	const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
		useCart();
	const item = items.find((item) => item.id === id);
	if (item == null) return null;

	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img
				src={item.imgUrl}
				style={{ width: "125px", height: "75px", objectFit: "cover" }}
			/>
			<div className="me-auto">
				<div>
					{item.name}{" "}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".65rem" }}>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".75rem" }}>
					{formatCurrency(item.price)}
				</div>
			</div>
			<div className="d-flex justify-content-center flex-column align-items-center">
				{" "}
				{formatCurrency(item.price * quantity)}
				<div className="d-flex gap-3" style={{ fontSize: "1.4rem" }}>
					<Button
						onClick={() => decreaseCartQuantity(item.id)}
						className="btn btn-light btn-sm">
						-
					</Button>
					<Button
						onClick={() => increaseCartQuantity(item.id)}
						className="btn btn-light btn-sm">
						+
					</Button>
				</div>
			</div>
			<Button
				variant="outline-danger"
				size="sm"
				onClick={() => removeFromCart(item.id)}>
				&times;
			</Button>
		</Stack>
	);
};

export default CartItem;
