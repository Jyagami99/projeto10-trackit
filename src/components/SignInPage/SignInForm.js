import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles";
import UserLoggedInContext from "./../../contexts/UserLoggedInContext";

export default function SignInForm({ pageLoaded, setPageLoaded }) {
	const navigate = useNavigate();
	const { userLoggedIn, setUserLoggedIn } = React.useContext(
		UserLoggedInContext
	);
	const [userLoginData, setUserLoginData] = React.useState({
		email: "",
		password: "",
	});
	const { email, password } = userLoginData;
	const url =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

	function fillButtonContent() {
		return !pageLoaded ? (
			<ThreeDots color="#fff" height={40} width={40} />
		) : (
			"Entrar"
		);
	}

	function disableWhileLoading() {
		return !pageLoaded ? "disabled" : "";
	}

	function handleSubmit(e) {
		e.preventDefault();
		setPageLoaded(false);

		let promise = axios.post(url, userLoginData);
		promise
			.then((response) => {
				const {
					data: { name, id, email, image, token },
				} = response;
				localStorage.setItem("token", token);
				const newUserData = {
					name,
					image,
					id,
					email,
					isLoggedIn: true,
				};
				localStorage.setItem("userData", JSON.stringify(newUserData));
				setUserLoggedIn(true);
				navigate("../hoje");
			})
			.catch((err) => {
				alert("Usuário e/ou senha inválido(s)");
				setPageLoaded(true);
			});
	}

	return (
		<S.Form>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<S.Input
					type="email"
					name="email"
					placeholder="email"
					value={email}
					onChange={(e) =>
						setUserLoginData({
							...userLoginData,
							email: e.target.value,
						})
					}
					disabled={disableWhileLoading()}
					required
				/>
				<S.Input
					type="password"
					name="password"
					placeholder="senha"
					value={password}
					onChange={(e) =>
						setUserLoginData({
							...userLoginData,
							password: e.target.value,
						})
					}
					disabled={disableWhileLoading()}
					required
				/>
				<S.DefaultButton>{fillButtonContent()}</S.DefaultButton>
			</form>
		</S.Form>
	);
}
