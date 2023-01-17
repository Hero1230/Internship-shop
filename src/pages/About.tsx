import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const About = () => {
	return (
		<div
			className="text-center d-flex align-items-center justify-content-center flex-column"
			style={{
				width: "100%",
				height: "100%",
				position: "fixed",
				top: 0,
				right: 0,
			}}>
			<div>
				<p style={{ fontSize: "3rem" }}>
					This application was created for internship application purpose 😎
				</p>
			</div>
			<Button className="btn-lg">
				<Nav.Link to={"/"} as={NavLink}>
					Browse Products Now!
				</Nav.Link>
			</Button>
		</div>
	);
};

export default About;
