import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../assets/css/styles";

export default function Header() {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
			navigate("/");
		}
	}, []);
	const userData = JSON.parse(localStorage.getItem("userData"));

	return userData ? (
		<S.Header>
			<h1>TrackIt</h1>
			<img src={userData.image} alt={`Ícone do usuário: ${userData.name}`} />
		</S.Header>
	) : (
		<></>
	);
}
