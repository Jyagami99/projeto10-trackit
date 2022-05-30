import React from "react";

import * as S from "../../assets/css/styles";
import trashIcon from "./../../assets/images/trash-icon.svg";

export default function Habit({ habit: { id, name, days }, removeHabit }) {
	const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
	const buttonsWeekdays = weekdays.map((day, index) => {
		return days.includes(index) ? (
			<S.DayButtonOn key={index}>{day}</S.DayButtonOn>
		) : (
			<S.DayButton key={index}>{day}</S.DayButton>
		);
	});

	return (
		<S.Habit>
			<p>{name}</p>
			<div>{buttonsWeekdays}</div>
			<S.RemoveHabit
				onClick={() => {
					if (window.confirm("Realmente deseja apagar o hábito?")) {
						removeHabit(id);
					}
				}}
			>
				<img src={trashIcon} alt="Remove task Icon" />
			</S.RemoveHabit>
		</S.Habit>
	);
}
