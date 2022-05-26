import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import logo from "../../assets/images/logo.png";
import UserContext from "../../contexts/UserContexts";

export default function Login() {
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
	const navigate = useNavigate();
	const { setUser } = React.useContext(UserContext);
	const [pageLoaded, setPageLoaded] = React.useState(false);
	const [userLoginData, setUserLoginData] = React.useState({
		email: "",
		password: "",
	});

	function handleForm(e) {
		setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		setPageLoaded(true);

		const promise = axios.post(URL, userLoginData);
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
				setUser(true);
				navigate("../today");
			})
			.catch((error) => {
				alert("Usuário e/ou senha inválido(s)");
				setPageLoaded(true);
			});
	}

	return (
		<>
			{" "}
			<Container>
				<img src={logo} alt="Logo" />
				<form onSubmit={handleSubmit}>
					<Input
						type="email"
						name="email"
						placeholder="email"
						disabled={pageLoaded}
						value={userLoginData.email}
						onChange={handleForm}
						required
					/>
					<Input
						type="password"
						name="password"
						placeholder="senha"
						disabled={pageLoaded}
						value={userLoginData.password}
						onChange={handleForm}
						required
					/>
					<Button type="submit" disabled={pageLoaded}>
						{pageLoaded ? (
							<ThreeDots color="white" height="14" width="50" />
						) : (
							"Entrar"
						)}
					</Button>
					<Link to="/cadastro">
						<Text>Não tem uma conta? Cadastre-se!</Text>
					</Link>
				</form>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;

	img {
	}

	form {
		display: flex;
		flex-direction: column;
	}
`;

const Input = styled.input`
	width: 300px;
	height: 45px;
	margin-bottom: 6px;
	background: #ffffff;
	border: 1px solid #d5d5d5;
	border-radius: 5px;

	font-weight: 400;
	font-size: 20px;
	line-height: 25px;

	::placeholder {
		color: #dbdbdb;
	}
`;

const Button = styled.button`
	width: 300px;
	height: 45px;
	margin-bottom: 26px;
	background: #52b6ff;
	border-radius: 5px;
	border: 1px solid #52b6ff;
	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 400;
	font-size: 21px;
	line-height: 26px;
	text-align: center;
	color: #ffffff;
`;

const Text = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	text-decoration-line: underline;

	color: #52b6ff;
`;
