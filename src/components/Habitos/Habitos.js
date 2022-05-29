import React from "react";
import axios from "axios";

import UserLoggedInContext from "../../contexts/UserLoggedInContext";
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";
import { useNavigate } from "react-router-dom";

export default function Habitos() {
	const { setUserLoggedIn } = React.useContext(UserLoggedInContext);
	const [habits, setHabits] = React.useState([]);
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
	const token = localStorage.getItem("token");
	const config = {
		headers: {
			Authorization: "Bearer " + token,
		},
	};
	const navigate = useNavigate();

	React.useEffect(() => {
		const promise = axios.get(URL, config);
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

	return (
		<>
			{" "}
			<HeaderComponent />
			<FooterComponent />
		</>
	);
}
