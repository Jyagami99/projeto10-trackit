import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles";

function Header() {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
			navigate("/");
		}
	}, []);
	const userData = JSON.parse(localStorage.getItem("userData"));

	return userData ? (
		<Header>
			<Link to="../">
				<h1>TrackIt</h1>
			</Link>
			<img src={userData.image} alt={`Username Icon`} />
		</Header>
	) : (
		<></>
	);
}

export default Header;
