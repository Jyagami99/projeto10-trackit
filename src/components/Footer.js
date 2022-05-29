import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PercentageHabitsDoneContext from "../contexts/PercentageHabitsDoneContext";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function FooterComponent() {
	const { percentage } = React.useContext(PercentageHabitsDoneContext);
	return (
		<Footer>
			<FooterAltLink to="/habitos">
				<FooterLinkWrapper>
					<p>Hábitos</p>
				</FooterLinkWrapper>
			</FooterAltLink>
			<FooterLink to="/hoje">
				<TodayButton>
					<CenteredCircularProgressbar
						value={percentage}
						styles={buildStyles({
							textColor: "#fff",
							pathColor: "#fff",
							trailColor: "transparent",
							pathTransition: "stroke-dashoffset 0.5s ease 0s",
						})}
					/>
					<p>Hoje</p>
				</TodayButton>
			</FooterLink>
			<FooterAltLink to="/historico">
				<FooterLinkWrapper>
					<p>Histórico</p>
				</FooterLinkWrapper>
			</FooterAltLink>
		</Footer>
	);
}
const Footer = styled.footer`
	position: fixed;
	height: 70px;
	bottom: 0;
	width: 100%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 17.976px;
	line-height: 22px;
	text-align: center;
	color: #52b6ff;
	padding: 0 5px;
`;

const FooterLinkWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	cursor: pointer;
	p {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
`;

const TodayButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #52b6ff;
	width: 90px;
	height: 90px;
	border-radius: 50%;
	transform: translate(0, -25%);
	cursor: pointer;
	p {
		color: white;
		font-size: 17.976px;
		line-height: 22px;
		text-align: center;
		cursor: pointer;
	}
`;

const CenteredCircularProgressbar = styled(CircularProgressbar)`
	position: absolute;
	padding: 5px;
`;

const FooterLink = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	&:visited {
		color: inherit;
	}
`;

const FooterAltLink = styled(FooterLink)`
	width: 100%;
	height: 100%;
`;
