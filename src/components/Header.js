import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeaderComponent() {
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
			<Image src={userData.image} alt={`Username Icon`} />
		</Header>
	) : (
		<></>
	);
}

const Header = styled.header`
	@import url("https://fonts.googleapis.com/css2?family=Playball&display=swap");
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #126ba5;
	height: 70px;
	width: 100%;
	padding: 0px 18px;
	position: fixed;

	h1 {
		font-family: "Playball", cursive;
		font-weight: 400;
		font-size: 40px;
		line-height: 50px;
		color: #fff;
	}
`;

const Image = styled.img`
	border-radius: 100px;
	width: 50px;
	height: 50px;
`;
