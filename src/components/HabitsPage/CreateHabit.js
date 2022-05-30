import React from "react";
import { ThreeDots } from "react-loader-spinner";

import * as S from "../../assets/css/styles";
import CreateHabitContext from "./../../contexts/CreateHabitContext";

export default function CreateHabit({
	toggleCreateTaskContainer,
	saveHabit,
	componentLoaded,
	setComponentLoaded,
}) {
	React.useEffect(() => {
		setTimeout(() => {
			setComponentLoaded(true);
		}, 200);
	}, []);

	const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
	const { habitName, setHabitName } = React.useContext(CreateHabitContext);
	const { habitDays, setHabitDays } = React.useContext(CreateHabitContext);
	const buttonsWeekdays = weekdays.map((day, index) => {
		if (!habitDays.includes(index)) {
			return (
				<S.DayButton
					onClick={() => {
						if (!habitDays.includes(index)) {
							habitDays.push(index);
						} else {
							habitDays.sort();
							habitDays.splice(habitDays.indexOf(index), 1);
						}
						habitDays.sort();
						setHabitDays([...habitDays]);
					}}
				>
					{day}
				</S.DayButton>
			);
		} else {
			return (
				<S.DayButtonOn
					onClick={() => {
						if (!habitDays.includes(index)) {
							habitDays.push(index);
						} else {
							habitDays.sort();
							habitDays.splice(habitDays.indexOf(index), 1);
						}
						habitDays.sort();
						setHabitDays([...habitDays]);
					}}
				>
					{day}
				</S.DayButtonOn>
			);
		}
	});

	function disableWhileLoading() {
		return !componentLoaded ? "disabled" : "";
	}

	function fillButtonContent() {
		return !componentLoaded ? (
			<ThreeDots color="#fff" height={40} width={40} />
		) : (
			"Salvar"
		);
	}

	function handleSaveHabit() {
		saveHabit({ name: habitName, days: habitDays });
		setHabitName("");
		setHabitDays([]);
	}

	return (
		<S.CreateHabit>
			<S.Input
				value={habitName}
				onChange={(e) => setHabitName(e.target.value)}
				type="text"
				required
				disabled={disableWhileLoading()}
				placeholder="nome do hábito"
			/>
			<div>{buttonsWeekdays}</div>
			<S.AddHabitButtons>
				<S.CancelButton
					onClick={() => {
						toggleCreateTaskContainer(false);
						setComponentLoaded(false);
					}}
				>
					Cancelar
				</S.CancelButton>
				<S.DefaultButton
					onClick={handleSaveHabit}
					disabled={disableWhileLoading()}
				>
					{fillButtonContent()}
				</S.DefaultButton>
			</S.AddHabitButtons>
		</S.CreateHabit>
	);
}
