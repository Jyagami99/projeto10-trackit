import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import logo from "../../assets/images/logo.png";

export default function Cadastro() {
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
	const navigate = useNavigate;

	React.useEffect(() => {
		const promise = axios.post(URL);
		promise.then((response) => {}).catch((err) => console.log(err));
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
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
						//onChange={}
						required
					/>
					<Input
						type="password"
						name="password"
						placeholder="senha"
						//onChange={}
						required
					/>
					<Input
						type="text"
						name="name"
						placeholder="nome"
						//onChange={}
						required
					/>
					<Input
						type="text"
						name="image"
						placeholder="foto"
						//onChange={}
						required
					/>
					<Button type="submit">Entrar</Button>
					<Link to="/">
						<Text>Já tem uma conta? Faça login!</Text>
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
