import React from "react";
import { buildStyles } from "react-circular-progressbar";

import * as S from "../assets/css/styles";
import PercentageHabitsDoneContext from "../contexts/PercentageHabitsDoneContext";

export default function Footer() {
	const { percentage } = React.useContext(PercentageHabitsDoneContext);

	return (
		<S.Footer>
			<S.FooterAltLink to="/habitos">
				<S.FooterLinkWrapper>
					<p>Hábitos</p>
				</S.FooterLinkWrapper>
			</S.FooterAltLink>
			<S.FooterLink to="/hoje">
				<S.TodayButton>
					<S.CenteredCircularProgressbar
						value={percentage}
						styles={buildStyles({
							textColor: "#fff",
							pathColor: "#fff",
							trailColor: "transparent",
							pathTransition: "stroke-dashoffset 0.5s ease 0s",
						})}
					/>
					<p>Hoje</p>
				</S.TodayButton>
			</S.FooterLink>
			<S.FooterAltLink to="/historico">
				<S.FooterLinkWrapper>
					<p>Histórico</p>
				</S.FooterLinkWrapper>
			</S.FooterAltLink>
		</S.Footer>
	);
}
