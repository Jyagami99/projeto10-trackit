import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "react-loader-spinner";

import GlobalStyles from "../assets/css/globalStyles";
import HabitsPage from "./HabitsPage/HabitsPage";
import HistoryPage from "./HistoryPage/HistoryPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import TodayPage from "./TodayPage/TodayPage";

import PercentageHabitsDoneContext from "../contexts/PercentageHabitsDoneContext";
import TodayHabitsContext from "../contexts/TodayHabitsContext";
import UserLoggedInContext from "../contexts/UserLoggedInContext";

export default function App() {
	const [percentage, setPercentage] = React.useState(0);
	const [todayHabits, setTodayHabits] = React.useState([]);
	const [userLoggedIn, setUserLoggedIn] = React.useState(false);

	React.useEffect(() => {
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				Authorization: "Bearer " + token,
			},
		};

		if (userLoggedIn) {
			const promise = axios.get(url, config);
			promise
				.then((response) => {
					const { data } = response;
					setTodayHabits(data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [userLoggedIn]);

	React.useEffect(() => {
		getPercentage();
	}, [todayHabits]);

	function getPercentage() {
		const countHabitsDone = todayHabits.filter((todayHabit) => todayHabit.done)
			.length;
		const countTotalHabits = todayHabits.length;

		setPercentage(((countHabitsDone / countTotalHabits) * 100).toFixed(2));
	}

	return (
		<>
			<GlobalStyles />
			<UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
				<TodayHabitsContext.Provider value={{ todayHabits, setTodayHabits }}>
					<PercentageHabitsDoneContext.Provider
						value={{ percentage, setPercentage }}
					>
						<BrowserRouter>
							<Routes>
								<Route
									path="/"
									element={
										<SignInPage
											setUserLoggedIn={(value) => setUserLoggedIn(value)}
										/>
									}
								/>
								;
								<Route path="/cadastro" element={<SignUpPage />} />
								<Route path="/habitos" element={<HabitsPage />} />
								<Route path="/hoje" element={<TodayPage />} />
								<Route path="/historico" element={<HistoryPage />} />
							</Routes>
						</BrowserRouter>
					</PercentageHabitsDoneContext.Provider>
				</TodayHabitsContext.Provider>
			</UserLoggedInContext.Provider>
		</>
	);
}
