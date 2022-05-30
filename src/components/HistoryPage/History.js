import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles";
import UserLoggedInContext from "./../../contexts/UserLoggedInContext";
import HistoryTopMessage from "./HistoryTopMessage.js";

export default function History() {
	const navigate = useNavigate();
	const { userLoggedIn, setUserLoggedIn } = React.useContext(
		UserLoggedInContext
	);

	React.useEffect(() => {
		if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
			setUserLoggedIn(false);
			navigate("../");
		} else {
			setUserLoggedIn(true);
		}
	}, []);

	return (
		<S.Container>
			<S.History>
				<HistoryTopMessage />
				<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
			</S.History>
		</S.Container>
	);
}
