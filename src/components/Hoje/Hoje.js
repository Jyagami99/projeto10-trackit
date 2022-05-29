import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";

export default function Hoje() {
	return (
		<>
			<HeaderComponent />

			<FooterComponent />
		</>
	);
}
