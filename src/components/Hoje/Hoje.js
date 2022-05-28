import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "./style.css";

export default function Hoje() {
	return (
		<>
			<Header>
				<span>TrackIt</span> <Image src="https://http.cat/422" />{" "}
			</Header>
			<Footer></Footer>
			<div></div>
		</>
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

	span {
		font-family: "Playball", cursive;
		font-weight: 400;
		font-size: 40px;
		line-height: 50px;
	}
`;

const Image = styled.img`
	border-radius: 100px;
	width: 50px;
	height: 50px;
`;

const Footer = styled.footer`
	width: 100%;
	height: 70px;
	bottom: 0;
	left: 0;
	background-color: aliceblue;
	position: fixed;
`;
