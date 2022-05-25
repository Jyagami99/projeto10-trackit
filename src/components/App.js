import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";
import Hoje from "./Hoje/Hoje";
import Login from "./Login/Login";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/habitos" element={<Habitos />} />
				<Route path="/hoje" element={<Hoje />} />
				<Route path="/historico" element={<Historico />} />
			</Routes>
		</BrowserRouter>
	);
}
