import React from "react";
import dayjs from "dayjs";

import * as S from "../../assets/css/styles.js";
import PercentageHabitsDoneContext from "./../../contexts/PercentageHabitsDoneContext";

export default function TopMessage() {
	const { percentage } = React.useContext(PercentageHabitsDoneContext);

	function getWeekday() {
		const dayNumber = dayjs().day();
		switch (dayNumber) {
			case 0:
				return "Domingo";
			case 1:
				return "Segunda-Feira";
			case 2:
				return "Terça-Feira";
			case 3:
				return "Quarta-Feira";
			case 4:
				return "Quinta-Feira";
			case 5:
				return "Sexta-Feira";
			default:
				return "Sábado";
		}
	}

	function getCalendarDay() {
		return dayjs().format("DD/MM");
	}

	function getPercentage() {
		return percentage > 0 ? (
			<S.CounterHabitsDone>
				{percentage} % dos hábitos concluídos
			</S.CounterHabitsDone>
		) : (
			<p>Nenhum hábito concluído ainda</p>
		);
	}

	return (
		<S.TodayTopMessage>
			<h2>
				{getWeekday()}, {getCalendarDay()}
			</h2>
			{getPercentage()}
		</S.TodayTopMessage>
	);
}
