import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles";
import GlobalStyles from "../../assets/css/globalStyles";
import Logo from "../Logo.js";
import SignInForm from "./SignInForm.js";

export default function SignInPage() {
	const navigate = useNavigate();
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
				<SignInForm pageLoaded={pageLoaded} setPageLoaded={setPageLoaded} />
				<S.StyledLink to="/cadastro">
					Não tem uma conta? Cadastre-se
				</S.StyledLink>
			</S.LoginContainer>
		</>
	);
}
