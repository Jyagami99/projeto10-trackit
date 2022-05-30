import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles";
import CreateHabitContext from "./../../contexts/CreateHabitContext";
import CreateHabit from "./CreateHabit.js";
import Habit from "./Habit.js";
import NoHabitMessage from "./NoHabitMessage.js";
import TopMessage from "./TopMessage.js";
import UserLoggedInContext from "./../../contexts/UserLoggedInContext";

export default function Habits() {
	const navigate = useNavigate();
	const { userLoggedIn, setUserLoggedIn } = React.useContext(
		UserLoggedInContext
	);
	const [habits, setHabits] = React.useState([]);
	const [toggleCreateTask, setToggleCreateTask] = React.useState(false);
	const [habitName, setHabitName] = React.useState("");
	const [habitDays, setHabitDays] = React.useState([]);
	const [componentLoaded, setComponentLoaded] = React.useState(false);
	const token = localStorage.getItem("token");
	const config = {
		headers: {
			Authorization: "Bearer " + token,
		},
	};
	const createHabitContent = checkCreateHabitContainer();
	const habitsContent = checkHabitsList();

	React.useEffect(() => {
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
		const promise = axios.get(url, config);
		promise
			.then((response) => {
				setUserLoggedIn(true);
				const { data } = response;
				setHabits(data);
			})
			.catch((err) => {
				setUserLoggedIn(false);
				navigate("../");
			});
	}, []);

	function checkHabitsList() {
		if (habits.length > 0) {
			return habits.map((habit, index) => {
				return (
					<Habit
						key={index}
						habit={habit}
						removeHabit={(habitId) => {
							removeHabit(habitId);
						}}
					/>
				);
			});
		} else {
			return <NoHabitMessage />;
		}
	}

	function toggleCreateTaskContainer(value) {
		setToggleCreateTask(value);
	}

	function checkCreateHabitContainer() {
		return toggleCreateTask ? (
			<CreateHabitContext.Provider
				value={{ habitName, habitDays, setHabitName, setHabitDays }}
			>
				<CreateHabit
					toggleCreateTaskContainer={(value) => {
						toggleCreateTaskContainer(value);
					}}
					saveHabit={(habitData) => {
						saveHabit(habitData);
					}}
					componentLoaded={componentLoaded}
					setComponentLoaded={setComponentLoaded}
				/>
			</CreateHabitContext.Provider>
		) : (
			<></>
		);
	}

	function saveHabit(habitData) {
		setComponentLoaded(false);

		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
		const promise = axios.post(url, habitData, config);
		promise
			.then((response) => {
				const { data } = response;
				habitData.id = data.id;
				toggleCreateTaskContainer(false);
				setHabits([...habits, habitData]);
			})
			.catch((err) => {
				alert("Algo deu errado");
				setComponentLoaded(true);
			});
	}

	function removeHabit(habitId) {
		const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
		axios.delete(url, config);
		const newHabits = habits.filter((habit) => {
			if (habit.id === habitId) {
				return false;
			} else {
				return true;
			}
		});
		setHabits(newHabits);
	}

	return (
		<>
			<S.Container>
				<TopMessage
					toggleCreateTaskContainer={(value) => {
						toggleCreateTaskContainer(value);
					}}
				/>
				<S.Habits>
					{createHabitContent}
					{habitsContent}
				</S.Habits>
			</S.Container>
		</>
	);
}
