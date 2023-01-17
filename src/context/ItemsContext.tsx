import {
	useContext,
	useState,
	useEffect,
	createContext,
	ReactNode,
} from "react";
import axios from "axios";

type Item = {
	id: string;
	name: string;
	imgUrl: string;
	price: number;
};

type ItemsContextProps = {
	items: Item[];
	isLoading: boolean;
};

const ItemsContext = createContext({} as ItemsContextProps);

type ItemsProviderProps = {
	children: ReactNode;
};

export function ItemsContextProvider({ children }: ItemsProviderProps) {
	const [items, setItems] = useState<Item[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const { data } = await axios.get(
				`https://shopnow-d1c8f-default-rtdb.firebaseio.com/items.json`
			);
			const fetchItems: Item[] = [];
			for (const key in data) {
				fetchItems.push(data[key]);
			}
			setItems(fetchItems);
			setIsLoading(false);
		}
		fetchData();
	}, []);
	return (
		<ItemsContext.Provider
			value={{
				items,
				isLoading,
			}}>
			{children}
		</ItemsContext.Provider>
	);
}

export function useItems() {
	const context = useContext(ItemsContext);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}
