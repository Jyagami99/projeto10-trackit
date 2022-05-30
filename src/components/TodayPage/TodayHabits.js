import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles.js";
import TodayHabitsContext from "./../../contexts/TodayHabitsContext";
import UserLoggedInContext from "./../../contexts/UserLoggedInContext";
import TodayHabit from "./TodayHabit.js";
import TopMessage from "./TopMessage.js";

export default function TodayHabits() {
	const navigate = useNavigate();
	const { todayHabits, setTodayHabits } = React.useContext(TodayHabitsContext);
	const { userLoggedIn, setUserLoggedIn } = React.useContext(
		UserLoggedInContext
	);
	const token = localStorage.getItem("token");
	const config = {
		headers: {
			Authorization: "Bearer " + token,
		},
	};
	const todayHabitsContent = checkTodayHabitsList();

	React.useEffect(() => {
		if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
			setUserLoggedIn(false);
			navigate("../");
		} else {
			setUserLoggedIn(true);
		}
	}, []);

	function markAsDone(id) {
		const urlCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
		const urlUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
		const newHabits = todayHabits.map((todayHabit) => {
			if (todayHabit.id === id) {
				if (todayHabit.done === false) {
					todayHabit.currentSequence === todayHabit.highestSequence
						? (todayHabit.highestSequence += 1)
						: (todayHabit.highestSequence += 0);
					todayHabit.currentSequence += 1;
					const promise = axios.post(urlCheck, "", config);
					promise
						.then((response) => {})
						.catch((err) => {
							console.log(err);
							todayHabit.currentSequence === todayHabit.highestSequence
								? (todayHabit.highestSequence -= 1)
								: (todayHabit.highestSequence -= 0);
							todayHabit.currentSequence -= 1;
						});
				} else if (todayHabit.done === true) {
					todayHabit.currentSequence === todayHabit.highestSequence
						? (todayHabit.highestSequence -= 1)
						: (todayHabit.highestSequence -= 0);
					todayHabit.currentSequence -= 1;
					const promise = axios.post(urlUncheck, "", config);
					promise
						.then((response) => {})
						.catch((err) => {
							console.log(err);
							todayHabit.currentSequence === todayHabit.highestSequence
								? (todayHabit.highestSequence += 1)
								: (todayHabit.highestSequence += 0);
							todayHabit.currentSequence += 1;
						});
				}
				return {
					...todayHabit,
					done: !todayHabit.done,
				};
			} else {
				return todayHabit;
			}
		});
		setTodayHabits([...newHabits]);
	}

	function checkTodayHabitsList() {
		if (todayHabits.length > 0) {
			return todayHabits.map((todayHabit, index) => {
				return (
					<TodayHabit
						key={index}
						todayHabit={todayHabit}
						setHabitAsDone={(id) => markAsDone(id)}
					/>
				);
			});
		} else {
			return <></>;
		}
	}

	return (
		<S.Container>
			<TopMessage todayHabits={todayHabits} />
			<S.TodayHabits>{todayHabitsContent}</S.TodayHabits>
		</S.Container>
	);
}
