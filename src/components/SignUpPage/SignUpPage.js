import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles";
import SignUpForm from "./SignUpForm.js";
import GlobalStyles from "../../assets/css/globalStyles";
import Logo from "../Logo";

export default function SignUpPage() {
	const navigate = useNavigate();
	const [userData, setUserData] = React.useState({
		email: "",
		password: "",
		name: "",
		image: "",
	});
	const [pageLoaded, setPageLoaded] = React.useState(false);

	React.useEffect(() => {
		if (localStorage.getItem("userData") && localStorage.getItem("token")) {
			navigate("./hoje");
		}
		setTimeout(() => {
			setPageLoaded(true);
		}, 200);
	}, []);

	return (
		<>
			<GlobalStyles />
			<S.LoginContainer>
				<Logo />
				<SignUpForm
					setUserData={setUserData}
					userData={userData}
					pageLoaded={pageLoaded}
					setPageLoaded={setPageLoaded}
				/>
				<S.StyledLink to="../">Já tem uma conta? Faça login!</S.StyledLink>
			</S.LoginContainer>
		</>
	);
}
