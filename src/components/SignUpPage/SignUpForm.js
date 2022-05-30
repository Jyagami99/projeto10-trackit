import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import * as S from "../../assets/css/styles";

export default function SignUpForm(props) {
	const navigate = useNavigate();
	const {
		setUserData,
		userData,
		userData: { email, password, name, image },
		pageLoaded,
		setPageLoaded,
	} = props;
	const url =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

	function fillButtonContent() {
		return !pageLoaded ? (
			<ThreeDots color="#fff" height={40} width={40} />
		) : (
			"Cadastrar"
		);
	}

	function disableWhileLoading() {
		return !pageLoaded ? "disabled" : "";
	}

	function handleSubmit(e) {
		e.preventDefault();
		setPageLoaded(false);

		let promise = axios.post(url, userData);
		promise
			.then((response) => {
				navigate("../");
			})
			.catch((err) => {
				alert(
					"Não foi possivel cadastrar! Verifique se o email já está cadastrado ou algum campo está errado"
				);
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
					onChange={(e) => setUserData({ ...userData, email: e.target.value })}
					disabled={disableWhileLoading()}
					required
				/>
				<S.Input
					type="password"
					name="password"
					placeholder="senha"
					value={password}
					onChange={(e) =>
						setUserData({
							...userData,
							password: e.target.value,
						})
					}
					disabled={disableWhileLoading()}
					required
				/>
				<S.Input
					type="text"
					name="name"
					placeholder="nome"
					value={name}
					onChange={(e) => setUserData({ ...userData, name: e.target.value })}
					disabled={disableWhileLoading()}
					required
				/>
				<S.Input
					type="url"
					name="image"
					placeholder="foto"
					value={image}
					onChange={(e) => setUserData({ ...userData, image: e.target.value })}
					disabled={disableWhileLoading()}
					required
				/>
				<S.DefaultButton type="submit">{fillButtonContent()}</S.DefaultButton>
			</form>
		</S.Form>
	);
}
