import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import StoreItem from "../components/StoreItem";
import { useItems } from "../context/ItemsContext";

type Item = {
	id: string;
	name: string;
	imgUrl: string;
	price: number;
};

const Home = () => {
	const { items, isLoading } = useItems();
	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<h1>Store</h1>
			<Row md="2" xs="1" lg="3" className="g-3">
				{items?.map((item: Item) => (
					<Col key={item.id}>{<StoreItem {...item} />}</Col>
				))}
			</Row>
		</>
	);
};

export default Home;
