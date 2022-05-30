import React from "react";

import logo from "./../assets/images/trackit-logo.svg";
import * as S from "../assets/css/styles";

export default function Logo() {
	return (
		<S.Logo>
			<img src={logo} alt="Logo" />
		</S.Logo>
	);
}
