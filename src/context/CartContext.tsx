import { createContext, ReactNode, useContext, useState } from "react";
import Cart from "../components/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartContext = {
	openCart: () => void;
	closeCart: () => void;
	getItemQuantity: (id: string) => number;
	increaseCartQuantity: (id: string) => void;
	decreaseCartQuantity: (id: string) => void;
	removeFromCart: (id: string) => void;
	cartQuantity: number;
	cartItems: CartItem[];
};

type CartItem = {
	id: string;
	quantity: number;
};

const CartContext = createContext({} as CartContext);

export const useCart = () => {
	return useContext(CartContext);
};

type CartProviderProps = {
	children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const getItemQuantity = (id: string) =>
		cartItems.find((item) => item.id === id)?.quantity || 0;

	const increaseCartQuantity = (id: string) => {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id) == null) {
				return [...currItems, { id, quantity: 1 }];
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id: string) => {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeFromCart = (id: string) => {
		setCartItems((currentItems) => {
			return currentItems.filter((item) => item.id !== id);
		});
	};

	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				openCart,
				closeCart,
			}}>
			{children}
			<Cart isOpen={isCartOpen} cartItems={cartItems} />
		</CartContext.Provider>
	);
};
