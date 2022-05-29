import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PercentageHabitsDoneContext from "../contexts/PercentageHabitsDoneContext";
import UserLoggedInContext from "../contexts/UserLoggedInContext";
import UserContext from "../contexts/UserContexts";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";
import Hoje from "./Hoje/Hoje";
import Login from "./Login/Login";

export default function App() {
	const [user, setUser] = React.useState("");
	const [userLoggedIn, setUserLoggedIn] = React.useState(false);
	const [percentage, setPercentage] = React.useState(0);
	return (
		<BrowserRouter>
			<UserContext.Provider value={{ user, setUser }}>
				<UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
					<PercentageHabitsDoneContext.Provider
						value={{ percentage, setPercentage }}
					>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/habitos" element={<Habitos />} />
							<Route path="/hoje" element={<Hoje />} />
							<Route path="/historico" element={<Historico />} />
						</Routes>
					</PercentageHabitsDoneContext.Provider>
				</UserLoggedInContext.Provider>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
