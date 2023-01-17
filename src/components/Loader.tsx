const Loader = () => {
	return (
		<div
			className="text-center d-flex align-items-center justify-content-center"
			style={{
				width: "100%",
				height: "100%",
				position: "fixed",
				top: 0,
				right: 0,
			}}>
			<div
				className="spinner-border text-primary"
				style={{ width: "6rem", height: "6rem" }}
				role="status">
				<span className="sr-only"></span>
			</div>
		</div>
	);
};

export default Loader;
